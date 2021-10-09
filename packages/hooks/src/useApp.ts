import { useLayoutEffect, useState } from 'react'
import { uWebView } from 'u-webview-core'

/**
 * 初始化,返回是否初始化成功
 */

export const useApp = ():boolean=>{
  const [isConnect,setConnect] = useState(false)

  useLayoutEffect(() => {
    console.log(paint)
    uWebView.connect((data => setConnect(data)))
  },[])

  return isConnect
}

const paint = `                          _          _               
  _   _     __      _____| |____   _(_) _____      __
 | | | |____\\ \\ /\\ / / _ \\ '_ \\ \\ / / |/ _ \\ \\ /\\ / /
 | |_| |_____\\ V  V /  __/ |_) \\ V /| |  __/\\ V  V / 
  \\__,_|      \\_/\\_/ \\___|_.__/ \\_/ |_|\\___| \\_/\\_/  
                                                     `
