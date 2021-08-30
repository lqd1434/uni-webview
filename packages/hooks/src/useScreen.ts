import { useLayoutEffect } from 'react'
import {postMessage} from 'u-webview-core'

/**
 *
 * @param showAppBar 是否显示标题栏
 * @param showStatusBar 是否显示状态栏
 * @param resCallback 回调函数,参数为bool类型,代表是否设置成功
 */

export const useScreen = (showAppBar: boolean,showStatusBar: boolean,resCallback:(result)=>any) => {
  useLayoutEffect(()=>{
    const data = JSON.stringify({
      showAppBar,
      showStatusBar
    })
    const res = postMessage(
      { desc: 'useScreen',
        name: 'fullScreen',
        type: 'event',
        data: data
      })
    resCallback(res)
  },[])
}
