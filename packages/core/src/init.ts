import { WebViewCore } from './core'
import {postMessage} from './postMessage'
import { Callback } from 'u-webView-type'
class UWebView{
  init(callback:Callback<boolean>){
    console.log('-----init----')
    const webviewCore=WebViewCore.instance()
    const timer = setTimeout(()=>{
      callback(false)
    },20000)
    webviewCore.addOnceListener('ping',({ detail }:CustomEvent)=>{
      clearTimeout(timer)
      if(detail === 'success'){
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
    WebViewCore.instance().addOnceListener('userInfo',({ detail }:CustomEvent)=>{
      if(detail){
        callback(detail)
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

