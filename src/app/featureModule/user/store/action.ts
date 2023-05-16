import { createAction,props } from "@ngrx/store";
import { logininterface } from "../interface/login";
import { signupinterface } from "../interface/signup";
import { addpostinterface } from "../interface/addpost";
import { googlesign } from "../interface/googlesign";
import { taginterface } from "../../admin/interfaces/taginterface";
import { resetpassinterface } from "../interface/resetpass";
import { listinterface } from "../interface/list";
import { addlistinterface } from "../interface/addlist";
import { reportinterface } from "../interface/report";
import { userinterface } from "../interface/user";


export const login=createAction('[log] do login',props<{formData:logininterface,isuser:Boolean}>())
export const loginsuccess=createAction('[log] do login success',props<({signup:signupinterface})>())
export const loginfailure=createAction('[log] do login failure',props<{error:string}>())

export const sociallogin=createAction('sociallogin',props<({formData:googlesign})>())
export const socialloginsuccess=createAction('socialoginsuccess')

export const signup=createAction('[log] do signup',props<{formData:signupinterface}>())
export const signupsuccess=createAction('[log] do signup success',props<({data:signupinterface})>())
export const signupfailure=createAction('[log] do signup failure',props<{error:string}>())


export const socialsignup=createAction('socialsignup',props<({token:string})>())
export const socialsignupsuccess=createAction('socialsignupsuccess')

export const otp=createAction('[log] otp',props<({value:Number})>())
export const otpsuccess=createAction('[log] otp success',props<({signup:signupinterface})>())
export const otpfailed=createAction('otpfailed',props<({error:string})>())

export const getuser=createAction('getusers')
export const getusersuccess=createAction('getuserssuccess',props<({signup:signupinterface})>())

export const generateotp=createAction('generateotp')
export const generateotpsuccess=createAction('generateotpsuccess')

export const addpost=createAction('Add post',props<{post:any}>())
export const addpostsuccess=createAction('post success')

export const gettag=createAction('get tags')
export const gettagsuccess=createAction('get tagsuccess',props<({tag:any})>())

export const gettagdetails=createAction('gettagdetails')
export const gettagdetailssuccess=createAction('gettagdetailssuccess',props<({tagdetails:Array<any>})>())

export const getpostdetails=createAction('getpostdetails')
export const getpostdetailssuccess=createAction('getpostdetails',props<({postdetails:addpostinterface})>())
export const getpostfailed=createAction('getpostfailed')

export const getsingletag=createAction('getsingletag',props<({id:string})>())
export const getsingletagsuccess=createAction('getsingletag',props<({tag:taginterface})>())

export const getsinglepost=createAction('getsinglepost',props<({postid:string})>())
export const getsinglepostsuccess=createAction('getsinglepostsuccess',props<({singlepost:any})>())

export const forgotpass=createAction('forgotpass',props<({email:string|null|undefined})>())
export const forgotpasssuccess=createAction('forgotpasssuccess')

export const resetpass=createAction('resetpass',props<({formData:resetpassinterface})>())
export const resetpasssuccess=createAction('resetpasssuccess')

export const comments=createAction('comments',props<({id:string})>())
export const commentssuccess=createAction('commentsuccess',props<({data:Array<string>})>())

export const addlike=createAction('addlike',props<({id:string,value:boolean | undefined})>())
export const addlikesuccess=createAction('addlikesuccess')

export const getlistcategory=createAction('getlistcategory')
export const getlistcategorysuccess=createAction('getlistcategorysuccess',props<({listcategory:listinterface[]})>())
;
export const addnewlist=createAction('addnewlist',props<({formdata:Partial<addlistinterface>,tag:Array<string>,location:any})>())
export const addnewlistsucces=createAction('addnewlistsuccess')

export const getlist=createAction('getlist')
export const getlistsuccess=createAction('getlistsuccess',props<({list:addlistinterface[]})>())

export const tagpost=createAction('tagpost',props<({id:string})>())
export const tagpostsuccess=createAction('tagpostsuccess',props<({post:any})>())

export const report=createAction('report',props<({id:string,formData:reportinterface})>())
export const reportsucces=createAction('reportsuccess')

export const error=createAction('error')

export const gettags=createAction('gettags')
export const gettagssuccess=createAction('gettagssuccess',props<({tag:any})>())

export const addreadlist=createAction('addreadlist',props<({id:string})>())
export const addreadlistsuccess=createAction('addreadlistsuccess')

export const getreadlist=createAction('getreadlist')
export const getreadlistsuccess=createAction('getreadlistsuccess',props<({readlist:any})>())

export const updateBio=createAction('updateBio',props<({form:userinterface})>())
export const updateBiosuccess=createAction('updateBiosuccess')

export const userlist=createAction('userlist')

export const editlist=createAction('editlist',props<({id:string | null | undefined})>())
export const editlistsuccess=createAction('editlistsuccess',props<({list:addlistinterface[]})>())

export const getusers=createAction('getusers')
export const getuserslistsuccess=createAction('getuserslistsuccess',props<({users:signupinterface[]})>())

export const chatmessege=createAction('chatmessege',props<({id:string | null | undefined})>())
export const chatmessegesuccess=createAction('chatmessegesuccess',props<({chat:any})>())

export const getuserpost=createAction('getuserpost')
export const getuserpostsuccess=createAction('getuserpostsuccess',props<({postdetails:addpostinterface})>())


export const changepass=createAction('changepass',props<({formData:resetpassinterface})>())
export const changepasssuccess=createAction('changepasssuccess')