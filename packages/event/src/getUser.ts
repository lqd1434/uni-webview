import { setToWindow } from 'u-webView-event/dist/declarations'
import { getUserInfo } from 'u-webView-core'


window.addEventListener('DOMContentLoaded', () => {
  setToWindow({method:getUserInfo,name:'getUserInfo'})
  console.log('DOMContentLoaded')
});
