import React  from 'react';
import { Divider, FormControl, OutlinedInput, InputLabel, InputAdornment, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import reactRouterDom from 'react-router-dom';
//import {Link} from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import YouTubeIcon from '@material-ui/icons/YouTube';

import youtube from '../../images/youtube.png'




const useStyles = makeStyles (theme =>({
    
    background_image:{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"})`,
        backgroudPosition: 'center center',
        backgroundSize: 'cover', 
        backgroudRepeat: 'no-repeat',
        position: 'fixed',  
        minWidth: '100%',
        minHeight: '100%',
        marginTop: '-5px'
},
    background_color:{
        backgroundColor: 'rgba(53, 110, 68, 0.6)',
        minWidth : '100%',
        minHeight : '100%',
        position:'fixed'
    },
    signup_bg:{
        width: '60%',
        height: '70%',
        backgroundColor: 'white',
        position:'absolute',
        zIndex : '2',
        margin: '0',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px',

    },
    signup_outter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        margin:'5px',
        
    },
    signup_innerimg:{
        width:'50%',
        height: '370px',
        margin: '5px',
    },
    signupimage:{
        width:'100%',
        height:'100%',
        objectFit: 'contain',
    },

    imageIcons:{
        display:'flex',
        justifyContent: 'space-evenly', 
    },
    signup_form:{
        width:'50%',
        height:'370px',
        display: 'grid',
        alignContent: 'center',
        justifyItems: 'end',
        justifyContent: 'space-around',
    },

    
    buttonStyle:{
        fontSize:'0.8rem',
        textTransform: 'capitalize',
        backgroundColor: '#DFDFDF',
        borderRadius: '10px',
        boxShadow:'0px 2px 2px #000000',
        '&:hover':{
            backgroundColor: '#356E44',
            color:'#ffff',
        }
    },

    iconStyle:{
        color: 'grey',
        fontSize : '20px',
        
    },
}));


const Signup = () => {
    const classes = useStyles();
    return(
        <>
        <section>
            <div className={classes.background_image} >
                        <div className = {classes.background_color}   >
            </div>

            <div className = {classes.signup_bg}>
                <div className={classes.signup_outter}>
                <div className={classes.signup_innerimg}>
                    <div>
                    <img src={youtube} alt="signupimage" className={classes.signupimage}/> 
                    </div>
                    <div className = {classes.imageIcons}>
                    <IconButton> <YouTubeIcon style = {{color:'orange'}}/> <p style = {{fontSize: '16px', marginLeft: '5px'}}>Watch</p></IconButton>
                    <IconButton> <YouTubeIcon style = {{color:'orange'}}/> <p style = {{fontSize: '16px',marginLeft: '5px'}}>Share</p> </IconButton> 
                    <IconButton> <YouTubeIcon style = {{color:'orange'}}/> <p style = {{fontSize: '16px', marginLeft: '5px'}}>Like</p></IconButton> 
                    </div>                   
                </div>
                
                <Divider orientation = 'vertical'/>
                <div className={classes.signup_form}>
                    
                    <FormControl variant = "outlined" size='small' style={{marginTop:'5px', marginBottom: '5px'}} >
                        <InputLabel htmlFor="outlinedinput-adornment-username">Username</InputLabel>
                        <OutlinedInput
                        id = "outlinedinput-adornment-username"
                        variant="outlined"
                        labelWidth={72}
                        startAdornment = {
                            <InputAdornment position = 'start'>
                                <PersonIcon className ={classes.iconStyle}/>
                            </InputAdornment>
                        }    
                        />
                    </FormControl>
                    <FormControl variant = "outlined" size='small' style={{marginTop:'5px', marginBottom: '5px'}} >
                        <InputLabel htmlFor="outlinedinput-adornment-email">Email</InputLabel>
                        <OutlinedInput
                        id = "outlinedinput-adornment-email"
                        variant="outlined"
                        labelWidth={40}
                        startAdornment = {
                            <InputAdornment position = "start">
                                <EmailIcon className ={classes.iconStyle}/>
                            </InputAdornment> 
                        }    
                        />
                    </FormControl>
                    <FormControl variant = "outlined" size='small' style={{marginTop:'5px', marginBottom: '5px'}} >
                        <InputLabel htmlFor="outlinedinput-adornment-password">Create password</InputLabel>
                        <OutlinedInput
                        id = "outlinedinput-with-icon-adornmnet"
                        variant="outlined"
                        labelWidth={120}
                        startAdornment = {
                            <InputAdornment position = "start">
                                <VisibilityIcon className ={classes.iconStyle}/>
                            </InputAdornment>
                        }    
                        />
                    </FormControl>
                    <FormControl variant = "outlined" size='small' style={{marginTop:'5px', marginBottom: '5px'}} >
                        <InputLabel htmlFor="outlinedinput-adornment-retypepassword">Retype password</InputLabel>
                        <OutlinedInput
                        id = "outlinedinput-with-icon-retypepassword"
                        variant="outlined"
                        labelWidth={125}
                        startAdornment = {
                            <InputAdornment position = "start">
                            <VisibilityOffIcon className ={classes.iconStyle}/>  
                            </InputAdornment>
                        }   
                        /> 
                    </FormControl>
                
                    <div style={{marginTop: '45px'}}>
                    <Button className = {classes.buttonStyle} style={{marginRight:'5px'}}>Signup</Button>
                    <Button className = {classes.buttonStyle} style={{marginLeft:'5px'}}>Signin</Button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
        </section>
        </>
    )
};

export default Signup;