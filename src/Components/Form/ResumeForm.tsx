import * as React from "react";
import FormType, { forminputReset } from '../../Types/FormType'
import { Button, Checkbox,FormControl, FormLabel, Grid,Paper,Typography } from '@material-ui/core/'
import {  useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import {setCurrentEntry} from '../../Reducers/actions'
import {EductionLevelSelector,DeveloperTypeSelector,AreyouSureDialog, CreateFormTextFields} from './components';
import { FormPropsI } from "../../Types/ComponentTypes";
import { AgreeAction, DisagreeAction, handleChange, handleSubmit } from "./FormActionHandlers";
import { Input } from "@material-ui/core";
import { useStyles } from "./styles/formstyle";
import { Prompt, useHistory } from "react-router-dom";
import TableSection from "./tableSection";
/**
 * This creates a form component
 * @param props 
 */
const ResumeForm :  React.FC<FormPropsI> = props => {
  /**
   * Variables used in Component
   */
  const classes = useStyles();
    const dispatch = useDispatch();
   const {cookies} = props;
   const [formInput, setformInput] = useState<FormType>(props.formData);
   const [dialogOpen, setDialogOpen] = useState(false);
   const [clearDialogOpen,setclearDialoOpen]= useState(false);
   const [shouldBlockNavigation,setShouldBlockNavigation] = useState(false);
   const history = useHistory() 
   useEffect(() => {
      history.block(() => {
       if( !shouldBlockNavigation){
        if(formInput!==forminputReset){
          setShouldBlockNavigation(true); 
          return false;    
        }
       }
          

        
 });
return function cleanup(){
  if(formInput===forminputReset){
  setShouldBlockNavigation(false); 

}
}
 },[formInput])

   const clearDialogAgreeAction = (forminputReset:FormType,setformInput:Function)=>{
    dispatch(setCurrentEntry(forminputReset));
    setformInput(forminputReset)
   }
  
    return (
      <CssBaseline>
      <Paper className={classes.paper}>
        <div className={classes.root}  >

<Typography>Form Used to Submit your resume</Typography>
<Grid container spacing={3}>
<Prompt
      when={shouldBlockNavigation}
      message='You have unsaved changes, are you sure you want to leave?'
    />
  {CreateFormTextFields(formInput,setformInput)}
  {DeveloperTypeSelector({formInput,handleChange,setformInput})}
  {EductionLevelSelector({formInput,handleChange,setformInput})}
 
    <Grid item lg={6} xs={12} sm={6}>
      <FormControl   required  >
      <FormLabel component="legend">Are willing to relocate?</FormLabel>
       <Checkbox
             
             checked={formInput.relocationStatus}
             onChange={(e:any)=>handleChange(e,'relocationStatus',setformInput,formInput,dispatch)}
             value={formInput.relocationStatus}
           />
      </FormControl>
      </Grid>
      <Grid item lg={6} xs={12} sm={6}>
      <FormControl required  error = {!formInput.resume}> 
      <FormLabel component="legend">Upload your resume before submitting</FormLabel>
      <Input required type="file" onChange={(event:any)=>handleChange(event,'resume',setformInput,formInput,dispatch)} />
    </FormControl>
    </Grid>
    </Grid>

<Button onClick={()=>handleSubmit(formInput,setDialogOpen)}> Submit</Button>
<Button onClick={()=>{ if(formInput !== forminputReset){ setclearDialoOpen(true); }}}> Clear</Button>
<AreyouSureDialog  
TextToDisplay = " Are you sure this information is correct and you are ready to submit"
Open={dialogOpen} 
 setOpen={setDialogOpen} 
AgreeButtonAction= {()=>AgreeAction(formInput,dispatch,props.setCookie,cookies,props.removeCookie,setformInput)} 
DisagreeButtonAction={()=>DisagreeAction(setDialogOpen)}></AreyouSureDialog>

<AreyouSureDialog  
  Open={clearDialogOpen} 
  TextToDisplay = " Are you sure want to clear this information"
   setOpen={setclearDialoOpen} 
  AgreeButtonAction= {()=>clearDialogAgreeAction(forminputReset,setformInput)} 
  DisagreeButtonAction={()=>setclearDialoOpen(false)}></AreyouSureDialog>
        </div>
       <TableSection/>
        
        </Paper>
        </CssBaseline>
    );
}


export default ResumeForm;