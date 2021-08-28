import { postMessage,WebViewCore } from 'u-webview-core'

export class AppEvent {
  static requestLogin(callback: (data)=>any){
    WebViewCore.instance().addOnceListener('requestLogin',(e:CustomEvent)=>{
      callback(e.detail)
    })
    postMessage({desc: '请求登录', name: 'requestLogin', type: 'event', })
  }
}


