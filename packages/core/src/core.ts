import { MyEmitter, U_window } from './gloable'
import { DispatchType } from 'u-webview-type'
import { Emitter } from 'u-webview-event'


class WebViewCore{
  constructor() {
    this.window['dispatchMyEvent'] = this.dispatchMyEvent
    this.window['Emitter'] = Emitter
  }

  get window(){
    return U_window
  }

  get webview(){
    return U_window.JsBridge
  }

  //flutter端调用
  dispatchMyEvent(eventString:string) {
    try {
      const { eventName,data } = JSON.parse(eventString) as DispatchType
      MyEmitter.emit(eventName,data)
      // this.window.document.dispatchEvent(new CustomEvent(eventName,{detail:data}))
    } catch (e) {
      console.log(e)
    }
  }
  // addListener(eventName:keyof ListenerName,fn:(data:any)=>any){
  //   // this.window.document.addEventListener(eventName,fn)
  //   MyEmitter.on(eventName,fn)
  // }
  //
  // addOnceListener(eventName:keyof ListenerName,fn:(data:any)=>any){
  //   // this.window.document.addEventListener(eventName,fn,{once:true})
  //   MyEmitter.once(eventName,fn)
  // }
  //
  // removeListener(eventName:keyof ListenerName,fn:(data:any)=>any){
  //   this.window.document.removeEventListener(eventName,fn)
  // }
}

export const WebViewCoreInstance = new WebViewCore()

