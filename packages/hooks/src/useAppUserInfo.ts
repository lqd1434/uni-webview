import { useLayoutEffect, useState } from 'react'
import { uWebView } from 'u-webview-core'

/**
 * 获取当前客户端登录的用户信息
 */
export const useAppUserInfo = () =>{
  const [userInfo,setUserInfo] = useState(null)
  useLayoutEffect(()=>{
    uWebView.getUserInfo((data) =>setUserInfo(data))
  },[])

  return userInfo
}
