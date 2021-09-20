import {  useLayoutEffect } from 'react'
import {postMessage} from 'u-webview-core'
import { Emitter } from 'u-webview-event'

const useSafeArea = (callback:(data:any)=>any)=>{

  useLayoutEffect(()=>{
    Emitter.on('safeArea',(data)=>{
      callback(data)
    })
    const res = postMessage({type:'event',desc:'安全区域',name:'safeArea'})
    if (!res){
      callback(false)
    }
  },[])

}

export default useSafeArea
