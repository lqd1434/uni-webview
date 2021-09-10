import { useLayoutEffect, useState } from 'react'
import { uWebView } from 'u-webview-core'

/**
 * 初始化,返回是否初始化成功
 */

export const useApp = ():boolean=>{
  const [isConnect,setConnect] = useState(false)

  useLayoutEffect(() => {
    uWebView.connect((data => setConnect(data)))
  },[])

  return isConnect
}
