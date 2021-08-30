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
  fn:(data:CustomEvent)=>any;
  eventName:string
}

export interface DispatchType{
  eventName:string
  data:any
}
