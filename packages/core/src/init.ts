import {postMessage} from './postMessage'
import { Callback } from 'u-webview-type'
import { UWCore } from './core'

class UWebView{

  init(callback:Callback<boolean>){
    const timer = setTimeout(()=>{
      callback(false)
    },20000)

    UWCore.Emitter.once('ping',(data:any)=>{
      clearTimeout(timer)
      if(data === 'success'){
        callback(true)
      } else{
        callback(false)
      }
    })
    const isSend = postMessage({ desc: '建立连接啊', name: 'ping', type: 'event' })
    if (!isSend){
      callback(false)
    }
  }

  getUserInfo(callback:Callback<any>){
    UWCore.Emitter.once('userInfo',(data:any)=>{
      if(data){
        callback(data)
      } else{
        callback(null)
      }
    })
    const isSend = postMessage({ desc: '获取app登录用户信息', name: 'userInfo', type: 'state' })
    if (!isSend){
      callback(null)
    }
  }
}

export const uWebView = new UWebView()

