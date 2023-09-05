import { signupinterface } from "./signup";

export interface logininterface{
    email?: String | null,
    password?:String | null
    token?: Token ;
    user?:signupinterface 
    failed?:string
    success?:string
}

export interface Token {
    token: string | undefined;
    exp: number | undefined;
  }