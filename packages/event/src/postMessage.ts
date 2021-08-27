import { ResType } from 'u-webview-type'

export function postMessage(window:any,message:ResType) {
  try {
    window.JsBridge.postMessage(JSON.stringify(message))
  } catch (e) {
    alert(e)
  }
}
