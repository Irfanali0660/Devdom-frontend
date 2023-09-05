import { SafeHtml } from "@angular/platform-browser"

export interface addpostinterface {
    editor?:string
    [key: string]: any;
    message?:string
    success?:string
    _id?:  string;
    userId?: UserId;
    post?: string;
    image?: string | File;
    date?:  Date;
    tag?:  any | null;
    likes?: (string)[] | null;
    __v?: number;
}

  export interface UserId {
    _id?: string;
    userName?: string;
    email?: string;
    password?: string;
    image?: string;
    phone?: number;
    status?: boolean;
    location?: string;
    verifyemail?: boolean;
    joinedDate?: string;
    work?: string;
    address?: string;
    birthday: string;
    gender?: string;
    googleimage?: null;
  }
  
