import { U_window } from './gloable'
import { DispatchType,EventType } from 'u-webView-type'


export class WebViewCore{
  constructor() {
    this.window['dispatchMyEvent'] = this.dispatchMyEvent
  }

  get window(){
    return U_window
  }

  get webview(){
    return U_window.JsBridge
  }

  static instance():WebViewCore{
    return new WebViewCore()
  }

  //flutter端调用
  dispatchMyEvent(eventString:string) {
    try {
      const { eventName,data } = JSON.parse(eventString) as DispatchType
      this.window.document.dispatchEvent(new CustomEvent(eventName,{detail:data}))
    } catch (e) {
      console.log(e)
    }
  }

  addListener({eventName,fn}:EventType){
    this.window.document.addEventListener(eventName,fn)
  }

  addOnceListener(eventName:string,fn:(data:CustomEvent)=>any){
    this.window.document.addEventListener(eventName,fn,{once:true})
  }

  removeListener({eventName,fn}:EventType){
    this.window.document.removeEventListener(eventName,fn)
  }

}

