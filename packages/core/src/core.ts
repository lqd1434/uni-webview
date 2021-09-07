import { U_window } from './gloable'
import { DispatchType } from 'u-webview-type'
import { Emitter, nameType } from 'u-webview-event'


class WebViewCore{

  constructor() {
    this.window['dispatchMyEvent'] = this.dispatchMyEvent
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
      Emitter.emit(<nameType>eventName,data)
    } catch (e) {
      console.log(e)
    }
  }
}

export const UWCore = new WebViewCore()

