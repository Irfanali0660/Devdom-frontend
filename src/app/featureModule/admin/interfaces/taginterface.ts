export interface taginterface {
    _id?:number | string 
    title?:string | null,
    description?:string | null,
    image?:string | null ,
    followers?:Array<Number>[]
    success?:string
    failed?:string | undefined
    [key: string]: any

}

export interface Taginterface{
    data: taginterface;
}


  