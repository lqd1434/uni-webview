import { U_window } from 'u-webview-core'
import { ResType } from 'u-webview-type'


export function postMessage(message:ResType) {
  try {
    U_window.JsBridge.postMessage(JSON.stringify(message))
  } catch (e) {
    alert(e)
  }
}
