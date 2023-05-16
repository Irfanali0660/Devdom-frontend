import { createSelector } from "@ngrx/store";
import { appstateinterface } from "../../../appSatate.interface";

export const selectFeature=(state:appstateinterface)=>state.authentication

export const isLoadingSelector=createSelector(selectFeature,(state)=>state.isLoading)
export const loginSelector=createSelector(selectFeature,(state)=>state.isLogged)
export const errorSelector=createSelector(selectFeature,(state)=>state.error)
export const postLoading=createSelector(selectFeature,(state)=>state.postload)

export const signupSelector=createSelector(selectFeature,(state)=>state.signup)

export const otpselector=createSelector(selectFeature,(state)=>state.error)

export const tagselector=createSelector(selectFeature,(state)=>state.tag)

export const tagdetailsselector=createSelector(selectFeature,(state)=>state.tagdetails)

export const getpostdetailsselector=createSelector(selectFeature,(state)=>state.postdetails)

export const singletag=createSelector(selectFeature,(state)=>state.singletag)

export const singlepostdetails=createSelector(selectFeature,(state)=>state.singlepostdetails)

export const comments=createSelector(selectFeature,(state)=>state.comments)

export const getlistcategory=createSelector(selectFeature,(state)=>state.listcategory)

export const getlist=createSelector(selectFeature,(state)=>state.list)

export const getreadlist=createSelector(selectFeature,(state)=>state.readlist)

export const editlist=createSelector(selectFeature,(state)=>state.editlist)

export const getuserlist=createSelector(selectFeature,(state)=>state.users)

export const chatmessage=createSelector(selectFeature,(state)=>state.chat)


