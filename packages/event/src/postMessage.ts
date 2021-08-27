import { U_window } from 'u-webview-core/src/gloable'
import { ResType } from 'u-webView-type'


export function postMessage(message:ResType) {
  try {
    U_window.JsBridge.postMessage(JSON.stringify(message))
  } catch (e) {
    alert(e)
  }
}
