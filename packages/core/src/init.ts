import { WebViewCore } from './core'
import {postMessage} from './postMessage'
class UWebView{
  init(callback:(data)=>any){
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
    const isSend = postMessage({ desc: '建立连接', name: 'ping', type: 'event' })
    if (!isSend){
      callback(false)
    }
  }
}

export const uWebView = new UWebView()

