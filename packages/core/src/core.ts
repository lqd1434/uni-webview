import { U_window } from './gloable'
import { DispatchType } from 'u-webview-type'
import { Emitter, nameType } from 'u-webview-event'


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

  get Emitter(){
    const { emit, off, offAll, on, once } = (window['Emitter'] as typeof Emitter)
    return { emit, off, offAll, on, once }
  }

  //flutter端调用
  dispatchMyEvent(eventString:string) {
    try {
      const { eventName,data } = JSON.parse(eventString) as DispatchType
      this.Emitter.emit(<nameType>eventName,data)
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

export const UWCore = new WebViewCore()

