
import { setCurrentEntry } from "../../Reducers/actions";
import FormType, { forminputReset } from "../../Types/FormType";

/**
 * This handles what happens when you hit submit on the form
 * checks if you filled out the form and pops open the dialog
 * @param formInput 
 * @param setDialogOpen 
 */
export const handleSubmit =(formInput:any,setDialogOpen:Function)=>{
    //Check inputs have been entered before allowing dialog to ope 

   if(formInput.firstName !== '' &&
   formInput.lastName !== ''
   && formInput.phoneNumber !== ''
   && formInput.fiveYearGoals !== ''
   && formInput.developerType
   && formInput.educationLevel
   && formInput.resume !== null){
     setDialogOpen(true)
   } else{
    //  const whichfieldsareEmpty = getWhichFieldIsEmpty(formInput);
    //  whichfieldsareEmpty.map((value:any)=>{
    //   alert("Please fill out all "+value+ " fields please")
    //  })
    alert("Please fill out all red fields please")
   }
 
 }
//  const getWhichFieldIsEmpty=(formInput:any)=>{
//   const keys = Object.keys(formInput);
//    let returnMe: any[] =[];
//    keys.map((key:any)=>{
//       if(!formInput[key] || formInput[key]===''){
//         returnMe.push(getCorrectLabelforColumn(key))
//       }

//    })
// return returnMe;
//  }
 /**
  * This handles what happens when you make a change to form inputs
  * @param event 
  * @param itemToChange 
  * @param setformInput 
  * @param formInput 
  */
   export const handleChange =async (event:any,itemToChange:string,setformInput:Function,formInput:FormType,dispatch:Function) => {
         if(itemToChange === 'resume'){
           setformInput({
               ...formInput,
               [itemToChange]:event.target.files[0]
             });

            await dispatch(setCurrentEntry({
              ...formInput,
              [itemToChange]:event.target.files[0]
            }))
         } else if( itemToChange ==='relocationStatus'){

           setformInput({
               ...formInput,
               [itemToChange]:event.target.checked
             });
           await  dispatch(setCurrentEntry({
               ...formInput,
               [itemToChange]:event.target.checked
             }))
          
         }
         else{
           setformInput({
               ...formInput,
               [itemToChange]:event.target.value as string[]
             });
           await  dispatch(setCurrentEntry({
              ...formInput,
              [itemToChange]:event.target.value as string[]
            }))
         }
     };
    /**
 * Action used when Pop up asks if you are sure and you agreee
 * @param formInput 
 * @param dispatch 
 * @param setCookie 
 * @param cookies 
 * @param removeCookie 
 */
export const AgreeAction= async (formInput:FormType,dispatch:Function,setCookie:Function,cookies:any,removeCookie:Function,setformInput:Function)=>{
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate()+1);
    if(cookies.FormInputs){
       var savecookies = [...cookies.FormInputs,formInput]
       await removeCookie('FormInputs');
        await setCookie('FormInputs', savecookies, { path: '/',expires:tomorrow});
    }
    //if there is no cookies saved only save the first one
    else if(!cookies.FormInputs){
   await setCookie('FormInputs', [formInput], { path: '/',expires:tomorrow});
    }
   
    setformInput(forminputReset)
    alert("Thanks For Applying,we will contact you shortly")
    dispatch(setCurrentEntry(forminputReset));

}

export const DisagreeAction=(setDialogOpen:Function)=>{
  setDialogOpen(false);
}