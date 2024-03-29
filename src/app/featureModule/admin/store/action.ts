import { createAction,props } from "@ngrx/store";
import { taginterface } from "../interfaces/taginterface"
import { listinterface } from "../../user/interface/list";
import { reportinterface } from "../../user/interface/report";
import { Addtags } from "../interfaces/addtags";

export const addtag=createAction('add tag',props<{TagData:taginterface,image: File[]}>())
export const addtagsuccess=createAction('tag added successfully')
export const addtagfailure=createAction('tag added failure',props<{error:string}>())

export const gettag=createAction('get tag')
export const gettagsuccess=createAction('gettag successfull',props<{tagdetails:taginterface}>())
export const gettagfailure=createAction('gettag failure',props<{error:string}>())

export const deletetag=createAction('delete tag',props<{id:string | number |undefined}>())
export const deletesuccess=createAction('delete tag is successfully')

export const gettagDetails=createAction('gettagDetails',props<{id:string | number | undefined}>())
export const gettagdetailssuccess=createAction('gettagdetailssuccess',props<{tagdetails:taginterface}>())

export const edittag=createAction('edittag',props<({TagData:Addtags,image:any})>())
export const edittagsuccess=createAction('edit added successfully')
export const editfailure=createAction('edit added failure',props<{error:string}>())

export const addlist=createAction('addlist',props<({listCategory:listinterface})>())
export const addlistsuccess=createAction('addlistsuccess')

export const adgetlist=createAction('adgetlist')
export const adgetlistsuccess=createAction('adgetlistsuccess',props<({adlist:listinterface})>())

export const liststatus=createAction('liststatus',props<({listid:string | undefined})>())
export const liststatussuccess=createAction('liststatussuccess')

export const getreportedpost=createAction('admingetreportedpost')
export const getreportedpostsuccess=createAction("admingetreportedpostsuccess",props<({reportpost:reportinterface})>())

export const deletepost=createAction('deletepost',props<({id:string})>())
export const deletepostsuccess=createAction('deletepostsuccess')

export const error=createAction('error')