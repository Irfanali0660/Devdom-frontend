import { createSelector } from "@ngrx/store";
import { appstateinterface } from "../../../appSatate.interface";

export const selectFeature=(state:appstateinterface)=>state.adminstate

export const isLoadingSelector=createSelector(selectFeature,(state)=>state.isLoading)
export const loginSelector=createSelector(selectFeature,(state)=>state.isLogged)
export const errorSelector=createSelector(selectFeature,(state)=>state.error)

export const tagdetails=createSelector(selectFeature,(state)=>state.details)
export const singletagdetails=createSelector(selectFeature,(state)=>state.singletag)

export const adlistselector=createSelector(selectFeature,(state)=>state.adlist)

export const reportData=createSelector(selectFeature,(state)=>state.reportpostData)
