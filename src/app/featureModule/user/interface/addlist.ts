import { Listcategory } from "../../admin/interfaces/listcategory"
import { listinterface } from "./list"
import { userinterface } from "./user"

export interface addlistinterface {
    _id?:string | null
    title?:String | null 
    details?:String| null
    category?:String| listinterface |null
    expdate?:string | null
    date?:string| null
    location?:string | null
    tag?:string[]
    userId?:userinterface 
    latitude?:number | undefined  ;
    longitude?:number |undefined
}   