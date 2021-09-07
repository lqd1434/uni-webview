import {postMessage} from 'u-webview-core'
import { EventsName } from 'u-webview-type'

interface ToastTypes {
  type:'success'|'error'|'warning'
  text:string
  duration:number
}

export class NativeUI {

  /**
   * 调用加载
   * 返回取消函数
   */
  static loadingToast(delay:number):()=>void{
    const isSend = postMessage({type:'event',name:'loadingToast',desc:'请求加载'})
    if (isSend){
      return ()=> {
        setTimeout(()=>{
          postMessage({ type: 'event', name: 'cancelToast', desc: '取消加载' })
        },delay)
      }
    } else {
      alert('error')
    }
  }
  /**
   *
   * @param type toast类型 'success'|'error'|'warning'
   * @param text 要显示的文字提示
   * @param duration 持续时间自动关闭
   */
  static textToast({type,text,duration}:ToastTypes){
    let name:keyof EventsName
    switch (type) {
      case 'success':
        name = 'successToast'
        break
      case 'error':
        name = 'errorToast'
        break
      case 'warning':
        name = 'waringToast'
        break
      default:
        name = 'successToast'
        break
    }
    const res = postMessage({type:'event',name:name,data:text,desc:'请求toast'})
    if (res){
      setTimeout(() => {
        postMessage({ type: 'event', name: 'cancelToast', desc: '关闭Toast' })
      },duration)
    }
  }
}
