export * from './postMessage'


export function say(window:any) {
  window.document.dispatchEvent(new CustomEvent('say',{detail:'hello'}))
}

