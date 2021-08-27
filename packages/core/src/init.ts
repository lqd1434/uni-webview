import { U_window } from './gloable'
import { postMessage } from 'u-webview-event'

class UWebView{

  init(){
    postMessage(U_window,{status:0,body:'hello',type:'state',desc:'hello'})
    console.log(U_window)
    console.log(U_window.document)
  }
}

export const uWebView = new UWebView()
