import { signupinterface } from "./signup"
import { userinterface } from "./user"

export interface addlistinterface {
    _id?:string | null
    title?:String | null 
    details?:String| null
    category?:String| null
    expdate?:string | null
    date?:string| null
    location?:string | null
    tag?:string[]
    userId?:userinterface 
}