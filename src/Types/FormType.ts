
type FormType = {
    firstName: string,
    lastName: string,
    phoneNumber?:string,
    email?:string,
    developerType:string[],
    educationLevel:string[],
    relocationStatus:boolean,
    fiveYearGoals:string,
    resume:File|null,


};
export const forminputReset: FormType = {
    firstName: '',
    lastName: '',
    phoneNumber:'',
    email:'',
    developerType:[],
    educationLevel:[],
    relocationStatus:false,
    fiveYearGoals:'',
    resume:null,
}

export default FormType;