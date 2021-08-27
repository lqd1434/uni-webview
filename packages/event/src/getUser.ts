import { setToWindow } from './index'


export function setWindow(getUserInfo:()=>any) {
  setToWindow({method:getUserInfo,name:'getUserInfo'})
  window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
  });
}

