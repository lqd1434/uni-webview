import { UWCore } from './core'
import { PostType } from 'u-webview-type'

export const postMessage=(message:PostType)=> {
  try {
    UWCore.webview.postMessage(JSON.stringify(message))
    return true
  } catch (e) {
    return false
  }
}
