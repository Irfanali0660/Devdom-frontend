import { taginterface } from "../../admin/interfaces/taginterface";
import { userinterface } from "./user";

export interface postinterface {
    _id?: string;
    userId?: userinterface;
    post?: string;
    image?: string;
    date?: string;
    tag?: (taginterface | null)[] | null;
    likes?: (string)[] | null;
  }
  
  