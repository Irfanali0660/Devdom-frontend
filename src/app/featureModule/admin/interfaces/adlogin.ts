export interface Adlogin {
    email?:string
    password?:string
    token?: Token;
    success?: string;
    failed?:string
}

  export interface Token {
    token?: string ;
    exp?: number ;
  }
  