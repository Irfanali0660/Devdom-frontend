import { signupinterface } from "./signup";

export interface Sociallogin {
    token: Token;
    success?: string;
    failed?:string
    data?: signupinterface ;
}
  export interface Token {
    token?: string;
    exp?: number;
  }
