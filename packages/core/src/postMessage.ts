import { WebViewCore } from './core'
import { PostType } from 'u-webview-type'

export const postMessage=(message:PostType)=> {
  console.log('-----postMessage------')
  try {
    WebViewCore.instance().webview.postMessage(JSON.stringify(message))
    return true
  } catch (e) {
    return false
  }
}
