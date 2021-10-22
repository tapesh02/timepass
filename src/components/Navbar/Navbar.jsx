import React, {useState, useCallback}  from 'react';
import {useHistory } from 'react-router';

import {Link, NavLink} from 'react-router-dom';

import "./Navbar.css";
import LogoComponent from "../Logo/LogoComponent.jsx"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Fade, IconButton, Menu, MenuItem, makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
;


//import { withStyles} from '@material-ui/core/styles'; 


const useStyles = makeStyles (theme => ({
    textbox:{
        '& .MuiOutlinedInput-root': {
            color: 'white',
            border: '1px solid white',
            zIndex: '1',
            '&.Mui-focused fieldset': {
                borderColor: 'transparent',
              },
        },
    },

}))




const Navbar = ({handleChange, searchText}) =>{

    const classes = useStyles();

 const [anchorEl, setAnchorEl] = useState (null);
 const open = Boolean(anchorEl);

 const openMenu = (event) =>{
     setAnchorEl(event.currentTarget);
 };

 const closeMenu = () =>{
     setAnchorEl(null);
 };

 
const history = useHistory();
const goToSignin = useCallback(
    () => {
        history.push ('/signin') ;
        setAnchorEl(null);
    },
    [history],
);

const watchhistory = useHistory();
const goToWatchlist = useCallback(
    () => {
        watchhistory.push ('/watchlist') ;
        setAnchorEl(null);
    },
    [watchhistory],
)
const productsHistory = useHistory();
const goToProducts = useCallback(
    () => {
        productsHistory.push ('/products') ;
        setAnchorEl(null);
    },
    [productsHistory],
)

const handleKeyPress = (event) => {
    if(event.key === 'Enter' && searchText !== '')
    {
       history.push('/products')
    }
   if(searchText === '' && event.key === 'Enter'){
       alert ("Please enter text to search")
   }
}
const handleClick = (event) =>{
    if (searchText === '')
    {
        alert("Please enter text to search")
    }
    if (searchText !== '')
    {
        goToProducts()
    }
}

    return (
        <>
        <div className="nav_main">
            <div className="logo_main">
                <Link to="/home" className="logo" >  <LogoComponent/> </Link>
            </div>
            <div className="search_main">
            <TextField
                id="input-with-icon-textfield"
                className = {classes.textbox}
                size= "small"
                placeholder="search"
                variant="outlined"
                value = {searchText}
                onChange = {handleChange}
                onKeyPress = {handleKeyPress}
                InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" onClick = {handleClick}>
                            <SearchIcon style={{color:'white', cursor: "pointer"}} />
                            </InputAdornment>
                        ),
                        }}
            />     
            </div>
            <div className="nav_menu">
            <NavLink exact activeClassName= "active_link"  to='/home' className="navitems"   > Home  </NavLink>
            <NavLink exact activeClassName= "active_link"  to='/about'className="navitems" > About </NavLink>
            <NavLink exact activeClassName= "active_link"  to = '/products' className="navitems" > Products </NavLink>
            <IconButton className="account_icon" onClick = {openMenu} >
                <AccountCircleIcon fontSize="small" color = "primary" /> 
            </IconButton>
            <Menu
                id = "menu"
                anchorEl = {anchorEl}                
                keepMounted
                open = {open}
                onClose = {closeMenu}
                TransitionComponent = {Fade}
                >
                    <MenuItem onClick = {goToSignin}> Profile</MenuItem>
                    <MenuItem onClick = {goToWatchlist}> Watchlist</MenuItem>
                    <MenuItem onClick = {closeMenu}> Sign Out</MenuItem>
                </Menu> 
            </div>
        </div>
        
        </>
    )
};
export default Navbar;