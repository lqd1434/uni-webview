import { setToWindow } from 'u-webview-event'

export function getUserInfo(userInfo:any) {
  console.log(userInfo)
}

setToWindow({method:getUserInfo,name:'getUserInfo'})
