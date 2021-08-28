import { useLayoutEffect } from 'react'
import {postMessage} from 'u-webview-core'

export const useScreen = (isFullScreen: boolean,resCallback:(result)=>any) => {
  useLayoutEffect(()=>{
    const res = postMessage({ desc: isFullScreen? '请求全屏':'取消全屏', name: 'fullScreen', type: 'event',data: isFullScreen})
    resCallback(res)
  },[])
}
