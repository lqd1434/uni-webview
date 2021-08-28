import { WebViewCore } from './core'
import {postMessage} from './postMessage'
class UWebView{
  init(callback:(data)=>any){
    const webviewCore=WebViewCore.instance()
    webviewCore.addOnceListener('ping',()=>{
      callback(true)
    })
    const isSend = postMessage({ desc: '建立连接', name: 'ping', type: 'state' })
    if (!isSend){
      callback(false)
    }
  }
}

export const uWebView = new UWebView()

