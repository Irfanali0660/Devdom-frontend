import { taginterface } from "../../admin/interfaces/taginterface";
import { addlistinterface } from "./addlist";
import { addpostinterface } from "./addpost";
import { Chat } from "./chat";
import { Comments } from "./comments";
import { listinterface } from "./list";
import { postinterface } from "./post";
import { signupinterface } from "./signup";

export interface authstate{
    isLogged:Boolean;
    isLoading:Boolean,
    error:String|null; 
    tag:[]
    tagdetails:taginterface[]
    signup:signupinterface
    postdetails:any;
    singletag:{}
    singlepostdetails:addpostinterface
    comments:Array<Comments>
    listcategory:listinterface[]
    list:addlistinterface[]
    readlist:[]
    editlist:any
    users:signupinterface[]
    chat:Chat[]
    postload:Boolean;
}