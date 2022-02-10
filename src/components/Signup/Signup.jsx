import React, {useState, useCallback}  from 'react';
import { Divider, FormControl, OutlinedInput, InputLabel, InputAdornment, Button, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import reactRouterDom from 'react-router-dom';
//import {Link} from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import YouTubeIcon from '@material-ui/icons/YouTube';

import youtube from '../../images/youtube.png'
import { useHistory } from 'react-router';




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

    const [userdetails, setUserdetails] = useState({
        username: "",
        email: "",
        password: "",
        retypepassword: "",
    });
    
    const handleChangeUserdetail = (event) => {
        setUserdetails({...userdetails, [event.target.name]  :  event.target.value})
    };
    const OnSubmitForm = (event) => {
        event.preventDefault();
        console.log(userdetails);   
    };


    //useHistory is used to navigate from one component to other with useCallback 
    const history = useHistory();
    const goToSignin = useCallback(
        () => {
            history.push('/signin')
        },
        [history],
    );

    return(
        <>
        <section>
            <div className={classes.background_image} >
                        <div className = {classes.background_color}></div>

                <div className = {classes.signup_bg}>
                    <div className={classes.signup_outter}>
                        <div className={classes.signup_innerimg}><div>
                            <img src={youtube} alt="signupimage" className={classes.signupimage}/> 
                    </div>
                        <div className = {classes.imageIcons}>
                        <IconButton disabled = "false"> <YouTubeIcon style = {{color:'orange'}}/> <p style = {{fontSize: '16px', marginLeft: '5px'}}>Watch</p></IconButton>
                        <IconButton disabled = "false"> <YouTubeIcon style = {{color:'orange'}}/> <p style = {{fontSize: '16px',marginLeft: '5px'}}>Share</p> </IconButton> 
                        <IconButton disabled = "false"> <YouTubeIcon style = {{color:'orange'}}/> <p style = {{fontSize: '16px', marginLeft: '5px'}}>Like</p></IconButton> 
                        </div>                   
                </div>
                
                <Divider orientation = 'vertical'/>
                
                    <div className={classes.signup_form}>
                        <form onSubmit = {OnSubmitForm} style = {{display: 'flex', flexDirection: 'column'}}>

                                        <Typography varient = "h5" style={{ margin: "5px" , padding: "10px" }}>Welcome </Typography>

                                        <FormControl variant = "outlined" size='small' style={{marginTop:'5px', marginBottom: '5px'}} >
                                            <InputLabel htmlFor="outlinedinput-adornment-username">Username</InputLabel>
                                            <OutlinedInput
                                            id = "outlined-username-input"
                                            variant="outlined"
                                            labelWidth={72}
                                            name = "username"
                                            value = {userdetails.username}
                                            onChange = {handleChangeUserdetail}
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
                                            id = "outlined-email-input"
                                            variant="outlined"
                                            labelWidth={40}
                                            type = 'email'
                                            name = "email"
                                            value = {userdetails.email}
                                            onChange = {handleChangeUserdetail}
                                            startAdornment = {
                                                <InputAdornment position = "start">
                                                    <EmailIcon className ={classes.iconStyle}/>
                                                </InputAdornment> 
                                            }    
                                            />
                                        </FormControl>
                                        <FormControl variant = "outlined" size='small' style={{marginTop:'5px', marginBottom: '5px'}} >
                                            <InputLabel htmlFor="outlined-password-input">Create password</InputLabel>
                                            <OutlinedInput
                                            id = "outlined-password-input"
                                            variant="outlined"
                                            labelWidth={120}
                                            type = "password"
                                            name = "password"
                                            value = {userdetails.password}
                                            onChange = {handleChangeUserdetail}
                                            startAdornment = {
                                                <InputAdornment position = "start">
                                                    <LockIcon className ={classes.iconStyle}/>
                                                </InputAdornment>
                                            }    
                                            />
                                        </FormControl>
                                        <FormControl variant = "outlined" size='small' style={{marginTop:'5px', marginBottom: '5px'}} >
                                            <InputLabel htmlFor="outlined-retypepassword-input">Retype password</InputLabel>
                                            <OutlinedInput
                                            id = "outlined-retypepassword-input"
                                            variant="outlined"
                                            labelWidth={125}
                                            type = "password"
                                            name = "retypepassword"
                                            value = {userdetails.retypepassword}
                                            onChange = {handleChangeUserdetail}
                                            startAdornment = {
                                                <InputAdornment position = "start">
                                                <LockIcon className ={classes.iconStyle}/>  
                                                </InputAdornment>
                                            }   
                                            /> 
                                        </FormControl>
                                
                                        <div style={{marginTop: '45px' , display: 'flex', justifyContent: 'flex-end'}}>
                                                <Button className = {classes.buttonStyle} style={{marginRight:'5px'}} type= "submit"  >Signup</Button>
                                                <Button className = {classes.buttonStyle} style={{marginLeft:'5px'}} onClick = {goToSignin}>Signin</Button>
                                        </div>
                        </form>
                    </div>
                   
                </div>
             </div>
        </div>
            
    </section>
       </>
    )
};

export default Signup;