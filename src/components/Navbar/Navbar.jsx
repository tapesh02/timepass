import React  from 'react';
import {Link, NavLink} from 'react-router-dom';
import "./Navbar.css";
import LogoComponent from "../Logo/LogoComponent.jsx"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';






const Navbar = ({handleChange, searchText}) =>{

    return (
        <>
        <div className="nav_main">
            <div className="logo_main">
                <Link exact to='/home' className="logo" >  <LogoComponent/> </Link>
            </div>
            <div className="search_main">
            <TextField
                id="input-with-icon-textfield"
                className= "searchTextStyle"
                size= "small"
                placeholder="search"
                variant="standard"
                value = {searchText}
                onChange = {handleChange}
                InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <SearchIcon style={{color:'white'}} />
                            </InputAdornment>
                        ),
                        }}
            />     
            </div>
            <div className="nav_menu">
            <NavLink exact activeClassName= "active_link"  to='/home' className="navitems"   > Home  </NavLink>
            <NavLink exact activeClassName= "active_link"  to='/about'className="navitems" > About </NavLink>
            <NavLink exact activeClassName= "active_link"  to = '/products' className="navitems" > Products </NavLink>
            <IconButton className="account_icon" >
                <AccountCircleIcon fontSize="small" />
            </IconButton>
            
            </div>
        </div>
        
        </>
    )
};
export default Navbar;