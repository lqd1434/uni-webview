import { useLayoutEffect } from 'react'
import { postMessage } from 'u-webview-core'
import { Emitter } from 'u-webview-event'

interface AppInfo{
  appName:string
  version:string
}

/**
 *
 * @param callback 结果回调函数 参数为回调结果 为false表示获取失败
 */
export const useAppInfo = (callback:(data:AppInfo|boolean)=>void)=>{
  useLayoutEffect(()=>{
    Emitter.on('appInfo',(data)=>{
      callback(data)
    })
    const res = postMessage({type:'state',desc:'app信息',name:'appInfo'})
    if (!res){
      callback(false)
    }
  },[])
}
