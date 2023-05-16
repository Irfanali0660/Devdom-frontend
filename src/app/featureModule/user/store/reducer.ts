import { createReducer,on } from "@ngrx/store"
import { authstate } from "../interface/authstate"
import * as action from './action'

export const initialState:authstate={
    isLogged: false,
    isLoading: false,
    error: null,
    tag:[],
    tagdetails:[],
    signup:{},
    postdetails:[],
    singletag:{},
    singlepostdetails:[],
    comments:[],
    listcategory:[],
    list:[],
    readlist:[],
    editlist:null,
    users:[],
    chat:null,
    postload:false
}

export const reducer=createReducer(initialState,
    on(action.login,(state)=>({...state,isLoading:true,error:null})),
    on(action.loginsuccess,(state,action)=>({...state,isLoading:false,error:null,signup:action.signup})),
    on(action.loginfailure,(state,action)=>({...state,isLoading:false,error:action.error})),
    
    on(action.sociallogin,(state)=>({...state,isLoading:true,error:null})),
    on(action.socialloginsuccess,(state,action)=>({...state,isLoading:false,error:null})),

    on(action.signup,(state)=>({...state,isLoading:true,error:null})),
    on(action.signupsuccess,(state,action)=>({...state,isLoading:false,error:null,signup:action.data})),
    on(action.signupfailure,(state,action)=>({...state,isLoading:true,error:action.error})),
    
    on(action.socialsignup,(state)=>({...state,isLoading:true,error:null})),
    on(action.socialsignupsuccess,(state,action)=>({...state,isLoading:false,error:null})),

    on(action.otpfailed,(state,action)=>({...state,isLoading:false,error:action.error})),
    on(action.otpsuccess,(state,action)=>({...state,isLoading:false,error:null,signup:action.signup})),

    on(action.addpost,(state)=>({...state,isLoading:true,error:null})),
    on(action.addpostsuccess,(state)=>({...state,isLoading:false,error:null})),
    
    on(action.gettag,(state)=>({...state,isLoading:true,error:null})),
    on(action.gettagsuccess,(state,action)=>({...state,isLoading:false,error:null,tag:action.tag})),

    on(action.gettagdetails,(state)=>({...state,isLoading:true,error:null})),
    on(action.gettagdetailssuccess,(state,action)=>({...state,isLoading:false,error:null,tagdetails:action.tagdetails})),

    on(action.getuser,(state)=>({...state,isLoading:true,error:null})),
    on(action.getusersuccess,(state,action)=>({...state,isLoading:false,error:null,signup:action.signup})),

    on(action.getpostdetails,(state)=>({...state,isLoading:true,error:null,postload:true})),
    on(action.getpostdetailssuccess,(state,action)=>({...state,isLoading:false,error:null,postload:false,postdetails:action.postdetails})),

    on(action.getsingletag,(state)=>({...state,isLoading:true,error:null})),
    on(action.getsingletagsuccess,(state,action)=>({...state,isLoading:false,error:null,singletag:action.tag})),

    on(action.getsinglepost,(state)=>({...state,isLoading:true,error:null})),
    on(action.getsinglepostsuccess,(state,action)=>({...state,isLoading:false,error:null,singlepostdetails:action.singlepost})),

    on(action.forgotpass,(state)=>({...state,isLoading:true,error:null})),
    on(action.forgotpasssuccess,(state)=>({...state,isLoading:false,error:null})),

    on(action.resetpass,(state)=>({...state,isLoading:true,error:null})),
    on(action.resetpasssuccess,(state)=>({...state,isLoading:false,error:null})),

    on(action.comments,(state)=>({...state,isLoading:true,error:null})),
    on(action.commentssuccess,(state,action)=>({...state,isLoading:false,error:null,comments:action.data})),

    on(action.addlike,(state)=>({...state,isLoading:true,error:null})),
    on(action.addlikesuccess,(state)=>({...state,isLoading:false,error:null})),

    on(action.getlistcategory,(state)=>({...state,isLoading:true,error:null})),
    on(action.getlistcategorysuccess,(state,action)=>({...state,isLoading:false,error:null,listcategory:action.listcategory})),

    on(action.addnewlist,(state)=>({...state,isLoading:true,error:null})),
    on(action.addnewlistsucces,(state)=>({...state,isLoading:false,error:null})),

    on(action.getlist,(state)=>({...state,isLoading:true,error:null})),
    on(action.getlistsuccess,(state,action)=>({...state,isLoading:false,error:null,list:action.list})),

    on(action.tagpost,(state)=>({...state,isLoading:true,error:null})),
    on(action.tagpostsuccess,(state,action)=>({...state,isLoading:false,error:null,postdetails:action.post})),

    on(action.report,(state)=>({...state,isLoading:true,error:null})),
    on(action.reportsucces,(state,action)=>({...state,isLoading:false,error:null})),

    on(action.gettags,(state)=>({...state,isLoading:true,error:null})),
    on(action.gettagssuccess,(state,action)=>({...state,isLoading:false,error:null,tag:action.tag})),

    on(action.addreadlist,(state)=>({...state,isLoading:true,error:null})),
    on(action.addreadlistsuccess,(state)=>({...state,isLoading:false,error:null})),

    on(action.getreadlist,(state)=>({...state,isLoading:true,error:null})),
    on(action.getreadlistsuccess,(state,action)=>({...state,isLoading:false,error:null,readlist:action.readlist})),

    on(action.updateBio,(state)=>({...state,isLoading:true,error:null})),
    on(action.updateBiosuccess,(state,action)=>({...state,isLoading:false,error:null})),

    on(action.userlist,(state)=>({...state,isLoading:true,error:null})),

    on(action.editlist,(state)=>({...state,isLoading:true,error:null})),
    on(action.editlistsuccess,(state,action)=>({...state,isLoading:false,error:null,editlist:action.list})),

    on(action.getusers,(state)=>({...state,isLoading:true,error:null})),
    on(action.getuserslistsuccess,(state,action)=>({...state,isLoading:false,error:null,users:action.users})),

    on(action.chatmessege,(state)=>({...state,isLoading:true,error:null})),
    on(action.chatmessegesuccess,(state,action)=>({...state,isLoading:false,error:null,chat:action.chat})),
   
    on(action.getuserpost,(state)=>({...state,isLoading:true,error:null})),
    on(action.getuserpostsuccess,(state,action)=>({...state,isLoading:false,error:null,postdetails:action.postdetails})),
    )