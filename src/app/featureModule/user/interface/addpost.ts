import { SafeHtml } from "@angular/platform-browser"

export interface addpostinterface {
    editor:string
    image?:string | null,
    tag?:Array<string>
    [key: string]: any;
    
}