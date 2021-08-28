import { useLayoutEffect, useState } from 'react'
import { uWebView } from 'u-webview-core'

export const useApp = ()=>{
  const [isConnect,setConnect] = useState(false)

  useLayoutEffect(() => {
    uWebView.init((data => setConnect(data)))
  },[])

  return isConnect
}
