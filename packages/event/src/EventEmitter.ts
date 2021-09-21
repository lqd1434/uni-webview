import { EventsName, StatesName } from 'u-webview-type'

export type nameType = keyof EventsName|keyof StatesName
export type callbackType = (data:any) => void

interface Listener{
  name:nameType;
  callback:callbackType[];
}

class MyEventEmitter{
  /**
   * 监听队列
   */
  listeners:Listener[] = []

  /**
   * 可以有多个监听者
   * @param name 监听命名空间
   * @param callback 监听回调函数
   */
  on(name:nameType, callback:callbackType){
    let exist:boolean = false
    let itemIndex:number = -1
    this.listeners.forEach((item,index)=>{
      if (item.name === name){
        exist = true
        itemIndex = index
      }
    })
    //如果不存在,则创建一个
    if (!exist) {
      this.listeners.push({name:name,callback:[callback]})
    } else{
      //否则新增一个监听
     this.listeners[itemIndex].callback.push(callback)
    }
  }

  /**
   * 发起一次性监听,监听完成后自动销毁
   * @param name 监听命名空间
   * @param callback 监听回调函数
   */
  once(name:nameType,callback:callbackType){
    const only = (data:any)=>{
      callback(data)
      this.off(name,only)
    }
    this.on(name,only)
  }

  /**
   * 发送消息
   * @param name 监听回调函数
   * @param data 传输参数
   */
  emit(name:nameType,data:any){
    this.listeners.forEach((item,index)=>{
      if (item.name === name){
        //向所有监听者发送
        this.listeners[index].callback.forEach((fn)=>fn(data))
      }
    })
  }

  /**
   *移除某个监听函数
   * @param name 监听命名空间
   * @param callback 监听回调函数
   */
  off(name:nameType,callback:callbackType){
    this.listeners.forEach((item,index)=>{
      if (item.name === name){
        this.listeners[index].callback.forEach((fn,index2)=>{
          if (fn === callback){
            this.listeners[index].callback.splice(index2,1)
          }
        })
      }
    })
  }

  /**
   *移除某个命名空间下的所有监听者
   * @param name 监听命名空间
   */
  offAll(name:nameType){
    this.listeners.forEach((item,index)=>{
      if (item.name === name){
        this.listeners[index].callback = []
      }
    })
  }
}

export const Emitter = new MyEventEmitter()
