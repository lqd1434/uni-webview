import {postMessage} from './postMessage'
import { Callback } from 'u-webview-type'
import { Emitter } from 'u-webview-event'

class UWebView{

  connect(callback:Callback<boolean>){
    const timer = setTimeout(()=>{
      callback(false)
    },20000)

    Emitter.once<'success'|{}>('ping',(data)=>{
      clearTimeout(timer)
      if(data === 'success'){
        callback(true)
      } else{
        callback(false)
      }
    })
    const isSend = postMessage({ desc: '建立连接啊', name: 'ping', type: 'event' })
    if (!isSend){
      callback(false)
    }
  }

  getUserInfo(callback:Callback<any>){
    Emitter.once('userInfo',(data)=>{
      if(data){
        callback(data)
      } else{
        callback(null)
      }
    })
    const isSend = postMessage({ desc: '获取app登录用户信息', name: 'userInfo', type: 'state' })
    if (!isSend){
      callback(null)
    }
  }
}

export const uWebView = new UWebView()

