import FormType from "./FormType";

export interface FormPropsI {
    formData:FormType,
     cookies?:any,
     setCookie:Function,
     removeCookie:Function,
 };
 export interface ResultPropsI{
    cookies?:any,
}
export interface AreYouSurePropsI{
    Open: boolean
    setOpen:Function,
    AgreeButtonAction:Function,
    DisagreeButtonAction:Function,
    TextToDisplay:string,
}

export type SortDirection = 'ASC' | 'DESC';