import { signupinterface } from "./signup";

export interface Otp {
    token?: Token;
    success?:string
    failed?:any
    data?:any;
}


export interface Token {
    token?: string;
    exp?: number;
  }