import axios, { AxiosRequestConfig } from 'axios'
import { NativeUI } from "u-webview-ui";
import {postMessage} from 'u-webview-core'

let cancelFunc = () =>{}

axios.interceptors.request.use((config) => {
  console.log(config)
  postMessage({type:'event',data:config,name:'request',desc:'请求拦截'})
  cancelFunc = NativeUI.loadingToast(0)
  return config
})

axios.interceptors.response.use((config) => {
  console.log(config)
  postMessage({type:'event',data:config,name:'response',desc:'请求拦截'})
    cancelFunc()
    cancelFunc = () =>{}
    return config
  },() => {
    cancelFunc()
    cancelFunc = () =>{}
  },
)

export class UHttp{

  static get(url: string,config?: AxiosRequestConfig){
    return new Promise((resolve, reject)=>{
      axios.get(url,config).then((value)=>{
        resolve(value)
      }).catch((e) => {
        reject(e)
      })
    })
  }

  static post(url: string, data?: any, config?: AxiosRequestConfig){
    return new Promise((resolve, reject)=>{
      axios.post(url,data,config).then((value)=>{
        resolve(value)
      }).catch((e) => {
        reject(e)
      })
    })
  }
}
