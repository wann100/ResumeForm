import { Select, MenuItem, FormControl, FormHelperText, Grid, TextField } from "@material-ui/core"
import React from "react"
import { useDispatch } from "react-redux";
import FormType from "../../../Types/FormType"
import { getCorrectLabelforColumn } from "../../Result/Helper";
import { handleChange } from "../FormActionHandlers";
import { useStyles } from "../styles/formstyle";

const EDUCACTIONLEVELNAMELIST = ["High School","Some College","Bachelor's","Master's","Doctorate","Other"];
const DEVELOPERTYPENAMELIST = ["Android","Backend","Web","Other"]
interface SelectorsI{
  formInput:FormType;
  handleChange:Function;
  setformInput:Function;
}
export const EductionLevelSelector = (props:SelectorsI)=>{
    let dispatch = useDispatch();
    const {formInput,handleChange,setformInput} = props;
  return(
      <Grid item lg={6} xs={12} sm={6}>
      <FormControl required fullWidth
      error={formInput.educationLevel.length ===0} >
        <Select
        
         multiple
        label={"Education Level"}
        value={formInput.educationLevel}
        onChange={(event:any)=>handleChange(event,'educationLevel' ,setformInput,formInput,dispatch)}
      >
       { EDUCACTIONLEVELNAMELIST.map((educationString:string)=>{
         return  <MenuItem key= {educationString} value={educationString}>{educationString} </MenuItem>

        })}
      </Select>
      <FormHelperText>Select Education Level</FormHelperText>
      </FormControl>
      </Grid>
    )
}
export const DeveloperTypeSelector = (props:SelectorsI)=>{
  let dispatch = useDispatch();
    const {formInput,handleChange,setformInput} = props;;
    return(
      <Grid item lg={6} xs={12} sm={6}>
      <FormControl required fullWidth   error={formInput.developerType.length ===0}>
        <Select
        
        multiple
        label={"Type Of Developer"}
                  value={formInput.developerType as string[]}
                  onChange={(event:any)=>handleChange(event,'developerType',setformInput,formInput,dispatch)}
                >
                    { DEVELOPERTYPENAMELIST.map((developertypeString:string)=>{
         return  <MenuItem  key= {developertypeString} value={developertypeString}>{developertypeString} </MenuItem>

        })}
                </Select>
                <FormHelperText>Select What type of Developer you are</FormHelperText>
                </FormControl>
          </Grid>
    )
}/**
 * Create elements that are of string type
 * @param formInput 
 * @param setformInput 
 */
export const CreateFormTextFields = (formInput:any,setformInput:Function)=>{
  let classes = useStyles();
  let dispatch = useDispatch();
let returnme: JSX.Element[] = []; ///what we are returning
let loopMe = Object.values(formInput); //what we are going to loop
loopMe.forEach((val,key) => {
 const keys = Object.keys(formInput); //list of keys in forminput
 if(typeof val === 'string' ){ //check if type is a string
   const inputKey = keys[key];
  if(inputKey === 'fiveYearGoals'){ //fiveyears goals is a little different so we check for it
    returnme.push(<TextField 
      key={inputKey}
      InputProps={{ classes: { root: classes.inputRoot } }}
      InputLabelProps={{
        classes: {
          root: classes.labelRoot,
          focused: classes.labelFocused
        }}
      }
      error={formInput.fiveYearGoals===''} 
fullWidth multiline  rows={6} required id="standard-basic" label="What are your five year goals" value ={formInput.fiveYearGoals} onChange= {(event:any)=>handleChange(event,'fiveYearGoals',setformInput,formInput,dispatch)} />
)
  }
  
  else{
    returnme.push (<Grid item xs={12} sm={6}>
      <TextField key={inputKey} type={inputKey==='phoneNumber'? 'number':'text'}  error={formInput[inputKey]===''}  fullWidth required id="standard-basic" label={getCorrectLabelforColumn(inputKey)} value ={formInput[inputKey]} onChange= {(event:any)=>handleChange(event,inputKey,setformInput,formInput,dispatch)} />
      </Grid>
 )
  }
}

})
return returnme;
}