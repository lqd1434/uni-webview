import { EventsName } from './eventsName'
import { StatesName } from './statesName'

export type Callback<T> = (data: T) => any

export interface ResType {
  status: 'success'|'failure';
  data:any;
  desc:string
}

export interface PostType {
  type:'state'|'event'
  data?:any
  name:keyof EventsName|keyof StatesName
  desc:string
}

export interface EventType {
  fn:(data:any)=>any;
  eventName:string
}

export interface DispatchType{
  eventName:keyof EventsName|keyof StatesName
  data:any
}
