import { createReducer,on } from "@ngrx/store"
import { authstate } from "../../admin/interfaces/authstate"
import * as adminAction from './action'

export const initialState:authstate={
    isLogged: false,
    isLoading: false,
    error: null,
    details:[],
    singletag:null,
    adlist:[],
    reportpostData:[]
}

export const reducer=createReducer(initialState,
    on(adminAction.addtag,(state)=>({...state,isLoading:true,error:null})),
    on(adminAction.addtagsuccess,(state,action)=>({...state,isLoading:false,error:null})),
    on(adminAction.addtagfailure,(state,action)=>({...state,isLoading:false,error:action.error})),
    
    on(adminAction.gettag,(state)=>({...state,isLoading:true,error:null})),
    on(adminAction.gettagsuccess,(state,action)=>({...state,isLoading:false,error:null,details:action.tagdetails})),
    on(adminAction.gettagfailure,(state,action)=>({...state,isLoading:false,error:action.error})),

    on(adminAction.deletetag,(state)=>({...state,isLoading:true,error:null})),

    on(adminAction.gettagDetails,(state)=>({...state,isLoading:true,error:null})),
    on(adminAction.gettagdetailssuccess,(state,action)=>({...state,isLoading:false,error:null,singletag:action.tagdetails})),

    on(adminAction.edittag,(state)=>({...state,isLoading:true,error:null})),
    on(adminAction.edittagsuccess,(state,action)=>({...state,isLoading:false,error:null})),
    on(adminAction.editfailure,(state,action)=>({...state,isLoading:false,error:action.error})),
    
    on(adminAction.addlist,(state)=>({...state,isLoading:true,error:null})),
    on(adminAction.addlistsuccess,(state)=>({...state,isLoading:false,error:null})),

    on(adminAction.adgetlist,(state)=>({...state,isLoading:true,error:null})),
    on(adminAction.adgetlistsuccess,(state,action)=>({...state,isLoading:false,error:null,adlist:action.adlist})),

    on(adminAction.liststatus,(state)=>({...state,isLoading:true,error:null})),
    on(adminAction.liststatussuccess,(state)=>({...state,isLoading:false,error:null})),

    on(adminAction.getreportedpost,(state)=>({...state,isLoading:true,error:null})),
    on(adminAction.getreportedpostsuccess,(state,action)=>({...state,isLoading:false,error:null,reportpostData:action.reportpost})),

    on(adminAction.deletepost,(state)=>({...state,isLoading:true,error:null})),
    on(adminAction.deletepostsuccess,(state)=>({...state,isLoading:false,error:null})),
    )
    