import {  useLayoutEffect } from 'react'
import {postMessage} from 'u-webview-core'
import { Emitter } from 'u-webview-event'

export const useSafeArea = (callback:(data:boolean|{})=>any)=>{

  useLayoutEffect(()=>{
    Emitter.on('safeArea',(data)=>{
      callback(data)
    })
    const res = postMessage({type:'state',desc:'安全区域',name:'safeArea'})
    if (!res){
      callback(false)
    }
  },[])

}
