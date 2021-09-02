import { Emitter } from 'u-webview-event'

export const U_window = typeof window == 'undefined' ? global : (window as any)

const { emit, off, offAll, on, once } = (window['Emitter'] as typeof Emitter)
export const MyEmitter:any = {emit,off, offAll, on, once}

