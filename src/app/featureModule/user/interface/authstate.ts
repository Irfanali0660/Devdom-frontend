import { addlistinterface } from "./addlist";
import { addpostinterface } from "./addpost";
import { listinterface } from "./list";
import { signupinterface } from "./signup";

export interface authstate{
    isLogged:Boolean;
    isLoading:Boolean,
    error:String|null; 
    tag:[] 
    tagdetails:string[]
    signup:signupinterface
    postdetails:any;
    singletag:{}
    singlepostdetails:[]
    comments:Array<string>
    listcategory:listinterface[]
    list:addlistinterface[]
    readlist:any
    editlist:any
    users:signupinterface[]
    chat:any
    postload:Boolean;
}