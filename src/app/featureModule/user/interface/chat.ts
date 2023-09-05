import { userinterface } from "./user";



export interface Chat {
    roomid?: string 
    query?: { [key: string]: string | null };
    _id?: string;
    users?: (string)[] | null;
    messages?: (MessagesEntity)[] | null ;
}

  export interface MessagesEntity {
    text?: string;
    sender?: userinterface;
    time?: string;
    _id?: string;
  }



    
