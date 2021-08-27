import { setToWindow } from 'u-webView-event'

export function getUserInfo(userInfo:any) {
  console.log(userInfo)
}

setToWindow({method:getUserInfo,name:'getUserInfo'})
