import { setToWindow } from 'u-webView-event/dist/declarations'
import { getUserInfo } from 'u-webView-core'

setToWindow({method:getUserInfo,name:'getUserInfo'})
