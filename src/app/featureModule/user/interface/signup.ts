import { logininterface } from "./login";
import { userinterface } from "./user";

export interface signupinterface{
    _id?:any,
    username?:String | null ,
    email?:String | null,
    phonenumber?:Number | null |String,
    password?:String | null,
    conformpassword?:String | null,
    verifyemail?:boolean | null,
    status?:boolean | string,
    token?: Token ;
    success?: string;
    failed?: string;
    error?:string;
    data?: any
}
  export interface Token {
    token: string | undefined;
    exp: number | undefined;
  }
  

  
  