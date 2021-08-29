export interface ResType {
  status: 'success'|'failure';
  data:any;
  desc:string
}

export interface PostType {
  type:'state'|'event'
  data?:any
  name:string
  desc:string
}

export interface EventType {
  fn:(data:CustomEvent)=>any;
  eventName:string
}

export interface DispatchType{
  eventName:string
  data:any
}
