import { U_window } from './gloable'
import { postMessage } from 'u-webview-event'

class UWebView{
  name: string = 'o'
  init(){
    postMessage(U_window,{status:0,body:'hello',type:'state',desc:'hello'})
    console.log(U_window)
    console.log(U_window.document)
    U_window.document.addEventListener('say',(e:any)=>{
      console.log(e)
      this.name = 'hellllll'
    })
  }
}

export const uWebView = new UWebView()
