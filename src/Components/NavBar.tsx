import React, { useState } from "react";
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
const useStyles = makeStyles((theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
    }),
);

const NavBar = () => {
    
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const [dialogOpen,setDialogOpen] = useState<boolean>(false)
    /**
     * Function called when the menu button is clicked
     *
     * @param event: the click event
     */
    const btnMenuClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
          
            setAnchorEl(event.currentTarget);
        
    };

    return (
        <AppBar position="relative">
            <Toolbar className='nav-bar'>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={btnMenuClicked}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    
                >
                    <MenuItem component={Link} to='/' onClick={() =>  setAnchorEl(null)}>Form</MenuItem>
                    <MenuItem component={Link} to='/results' onClick={() => { setAnchorEl(null) }}>Results</MenuItem>
                </Menu>
       
                
                <Typography variant="h5" component="h5">
                    Coding Challenge
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;