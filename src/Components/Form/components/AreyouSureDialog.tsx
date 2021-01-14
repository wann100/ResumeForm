
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react'
import { AreYouSurePropsI } from '../../../Types/ComponentTypes';



/**
 * Dialog that pops up when you hit submit on 
 * the form
 * @param props 
 */
const AreyouSureDialog :  React.FC<AreYouSurePropsI> = props => {
    const {Open,setOpen,DisagreeButtonAction,AgreeButtonAction,TextToDisplay} = props;

const handleCloseDialog =()=>{
    setOpen(false);
}
const handleAgreeClicked =async ()=>{
    setOpen(false);
    await AgreeButtonAction();
}
  
const handleDisagreeClicked =()=>{
    DisagreeButtonAction();
    setOpen(false);
}
    
return(
<Dialog
open={Open}
onClose={handleCloseDialog}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{"Caution"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {TextToDisplay}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagreeClicked} color="primary">
            Disagree
          </Button>
          <Button onClick={handleAgreeClicked} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
</Dialog>
)



}

export default AreyouSureDialog;