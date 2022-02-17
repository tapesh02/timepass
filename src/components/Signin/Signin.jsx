import React, {useState, useCallback}  from 'react';
import { Divider, FormControl, OutlinedInput, InputLabel, InputAdornment, Button, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import reactRouterDom from 'react-router-dom';
//import {Link} from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
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
    Signin_bg:{
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
    Signin_outter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        margin:'5px',
        
    },
    Signin_innerimg:{
        width:'50%',
        height: '370px',
        margin: '5px',
    },
    Signinimage:{
        width:'100%',
        height:'100%',
        objectFit: 'contain',
    },

    imageIcons:{
        display:'flex',
        justifyContent: 'space-evenly', 
    },
    Signin_form:{
        width:'50%',
        height:'370px',
        display: 'grid',
        gridGap: "87px",
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



const Signin = () => {
    const classes = useStyles();

    const [user, setUser] = useState({
        userEmail: "",
        enterPassword: "",
    });
    
    const handleChangeLogIndetail = (event) => {
        setUser({...user, [event.target.name]  :  event.target.value})
    };
    const OnSubmitLoginForm = (event) => {
        event.preventDefault();
        console.log(user);   
    };


    //useHistory is used to navigate from one component to other with useCallback 
    const history = useHistory();
    const goToSignup = useCallback(
        () => {
            history.push('/signup')
        },
        [history],
    );

    return(
        <>
        <section>
            <div className={classes.background_image} >
                        <div className = {classes.background_color}></div>

                <div className = {classes.Signin_bg}>
                    <div className={classes.Signin_outter}>
                        <div className={classes.Signin_innerimg}><div>
                            <img src={youtube} alt="Signinimage" className={classes.Signinimage}/> 
                    </div>
                        <div className = {classes.imageIcons}>
                        <IconButton disabled = "false"> <YouTubeIcon style = {{color:'orange'}}/> <p style = {{fontSize: '16px', marginLeft: '5px'}}>Watch</p></IconButton>
                        <IconButton disabled = "false"> <YouTubeIcon style = {{color:'orange'}}/> <p style = {{fontSize: '16px',marginLeft: '5px'}}>Share</p> </IconButton> 
                        <IconButton disabled = "false"> <YouTubeIcon style = {{color:'orange'}}/> <p style = {{fontSize: '16px', marginLeft: '5px'}}>Like</p></IconButton> 
                        </div>                   
                </div>
                
                <Divider orientation = 'vertical'/>
                
                    <div className={classes.Signin_form}>
                        <form onSubmit = {OnSubmitLoginForm} style = {{display: 'flex', flexDirection: 'column'}}>
                        <Typography varient = "h5" style={{ margin: "5px" , padding: "10px" }}>Welcome back.. </Typography>

                                        <FormControl variant = "outlined" size='small' style={{marginTop:'5px', marginBottom: '5px'}} >
                                            <InputLabel htmlFor="outlined-userEmail-input">Enter Email</InputLabel>
                                            <OutlinedInput
                                            id = "outlined-userEmail-input"
                                            variant="outlined"
                                            labelWidth={80}
                                            type = 'email'
                                            name = "userEmail"
                                            value = {user.userEmail}
                                            onChange = {handleChangeLogIndetail}
                                            startAdornment = {
                                                <InputAdornment position = "start">
                                                    <EmailIcon className ={classes.iconStyle}/>
                                                </InputAdornment> 
                                            }    
                                            />
                                        </FormControl>
                                        <FormControl variant = "outlined" size='small' style={{marginTop:'5px', marginBottom: '5px'}} >
                                            <InputLabel htmlFor="outlined-enterPassword-input">Enter password</InputLabel>
                                            <OutlinedInput
                                            id = "outlined-enterPassword-input"
                                            variant="outlined"
                                            labelWidth={120}
                                            type = "password"
                                            name = "enterPassword"
                                            value = {user.enterPassword}
                                            onChange = {handleChangeLogIndetail}
                                            startAdornment = {
                                                <InputAdornment position = "start">
                                                    <LockIcon className ={classes.iconStyle}/>
                                                </InputAdornment>
                                            }    
                                            />
                                        </FormControl>

                                        <p style  = {{fontSize : "0.6rem"}}>Forget Password? <span style = {{color: "red" , cursor: "pointer"}}>Click here </span></p>
                                       
                                        <div style={{marginTop: '130px' , display: 'flex', justifyContent: 'flex-end'}}>
                                                <Button className = {classes.buttonStyle} style={{marginRight:'5px'}} type= "submit"  >Signin</Button>
                                                <Button className = {classes.buttonStyle} style={{marginLeft:'5px'}} onClick = {goToSignup}>Signup</Button>
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

export default Signin;