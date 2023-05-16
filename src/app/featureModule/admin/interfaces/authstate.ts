import { listinterface } from "../../user/interface/list";

export interface authstate{
    isLogged:Boolean;
    isLoading:Boolean,
    error:String|null;  
    details:any;
    singletag:{
        image:string | null
    }|null
    adlist:any
    reportpostData:any
}