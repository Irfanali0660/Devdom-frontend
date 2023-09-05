import { listinterface } from "../../user/interface/list";
import { reportinterface } from "../../user/interface/report";
import { taginterface } from "./taginterface";

export interface authstate{
    isLogged:Boolean;
    isLoading:Boolean,
    error:String|null;  
    details:any;
    singletag:taginterface|null
    adlist:any
    reportpostData:reportinterface[]
}