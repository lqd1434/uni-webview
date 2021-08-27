import {U_window} from 'u-webview-core/src/gloable'

export  interface MethodType {
  method: (params: any) => any
  name: string
}

export interface SetResType{
  status:0|1,
  desc:string
}

export function setToWindow(method:MethodType) {
  try {
    U_window[method.name] = method
    return {status:0,desc:'success'} as SetResType
  } catch (e){
    return {status:1,desc:e.toString()} as SetResType
  }
}
