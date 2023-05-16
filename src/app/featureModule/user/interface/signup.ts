export interface signupinterface{
    _id?:String
    username?:String | null ,
    email?:String | null,
    phonenumber?:Number | null |String,
    password?:String | null,
    conformpassword?:String | null,
    verifyemail?:boolean | null,
    status?:boolean
}