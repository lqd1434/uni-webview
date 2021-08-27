export * from 'u-webview-event'
export * from 'u-webview-type'
export * from './getUserInfo'
import { U_window } from './gloable'
import { ResType } from 'u-webview-type'


export function core() {
  const data:ResType = {status:0,body:'hello I am core',desc:'发送消息'}
  U_window.JsBridge.postMessage(JSON.stringify(data))
  alert(JSON.stringify(U_window.JsBridge))
}
