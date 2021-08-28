export interface ResType {
  status: 'success'|'failure';
  body:any;
  desc:string
}

export interface PostType {
  type:'state'|'event'
  data?:any
  name:string
  desc:string
}

export interface EventType {
  fn:(data)=>any;
  eventName:string
}

export interface DispatchType{
  eventName:string
  data:any
}
