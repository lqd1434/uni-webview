import { setToWindow } from 'u-webView-event/dist/declarations'
import { getUserInfo } from 'u-webView-core'

export function setWindow() {
  setToWindow({method:getUserInfo,name:'getUserInfo'})
  window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
  });
}

