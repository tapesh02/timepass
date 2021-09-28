import React, {useState} from 'react';
import {Divider, IconButton, InputAdornment, FormControl, OutlinedInput, InputLabel, Button} from '@material-ui/core';

//import youtubeSvg from '../../images/youtubesvg'; use ../../ to go back to the original directory i.e src/components or src/images etc
import youtubePng from '../../images/youtube.png';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const homeStyle = ({

    background_image:{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"})` ,
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
    }

});

const signinstyle = ({

    signin_bg:{
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
        display: 'flex',

    },
    signin_image: {
        width: '50%',
        height: '90%',
        margin: '15px',
        padding: '5px',
        
    },

    signin_form: {
        width: '30%',
        height: '90%',
        margin: '15px',
        padding: '5px',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    youtube_image:{
        width:'100%', 
        height: '90%', 
        objectFit: 'cover'
    },

    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '-20px',
        color: 'black'
    },

    buttons_main:{
       margin:'15px'
    },

    button_icons: {
        backgroundColor: '#356E44',
        textTransform: 'capitalize',
        margin: '5px',
        color: 'white',
    }

});
const Signin = () => {

    //useStateObject Example
        const [values, setValues] = useState(
            {
                password: '',
                showPassword: false,
                email: '',
            }
        );

        const showChangeValues = (props) => (event) => {
            setValues({...values, [props]: event.target.value}); 
        };

        const OnclickButton = () => {
            setValues ({...values, showPassword : !values.showPassword})
        };

        const onMouseDownChange = (event) => {
            event.preventDefault();
        };

    return(
        <>
        <section>
            
            <div style={homeStyle.background_image} >
                        <div className="main_bg" style = {homeStyle.background_color} > </div>
            <div style = {signinstyle.signin_bg}>
                <div style = {signinstyle.signin_image}>
                    <img src={youtubePng} alt='youtube' style={signinstyle.youtube_image} />
                    <div style={signinstyle.icons} >
                    <IconButton>
                        <YouTubeIcon color='primary' fontSize='large' />
                    </IconButton>
                    <Divider orientation="vertical"/>
                    <IconButton>
                        <ShareIcon color='primary' fontSize='large' />
                    </IconButton>
                    <Divider orientation="vertical"/>
                    <IconButton>
                    <ThumbUpIcon color ='primary' fontSize='large' sx />
                    </IconButton>
                    </div>
                </div>
                <Divider orientation="vertical" variant="middle"/>
                <div style = {signinstyle.signin_form}>
                    <h3>Hi!..MovieHunt </h3>
                    <FormControl
                     id="outlined-size-small"
                     variant = "outlined"
                     size = "small"
                     style ={{margin:'15px'}}
                     >                       

                        <InputLabel htmlFor="outlined-adornment-email" style ={{margin:'-15px'}}>
                           Email
                        </InputLabel>
                        <OutlinedInput
                            id = "outlined-adornment-email"
                            startAdornment = {
                                <InputAdornment position="start">
                                    <IconButton style ={{margin:'-15px'}}>
                                        <ContactMailIcon/>
                                    </IconButton>
                                </InputAdornment>
                            }
                            />          
                    </FormControl>
                    <FormControl 
                     id="outlined-size-small"
                     variant = "outlined"
                     size = "small"
                     style ={{margin:'15px'}}
                     >
                        <InputLabel htmlFor="outlined-adornment-password" style ={{margin:'-15px'}}>
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id = "outlined-adornment-password"
                            type = {values.showPassword ? 'text': 'password'}
                            onChange = {showChangeValues('password')}
                            startAdornment = {
                                <InputAdornment position="start">
                                    <IconButton
                                    onClick ={OnclickButton}
                                    onMouseDown = {onMouseDownChange}
                                    style ={{margin:'-15px',}}
                                    >
                                    {values.showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>} 
                                    </IconButton>
                                </InputAdornment>
                            }
                            />          
                    </FormControl>
                    <div style = {signinstyle.buttons_main}>
                    <Button 
                    variant="contained"
                    size = "small"
                    style ={{textTransform: 'capitalize', margin: '5px'}}
                    >Signup
                    </Button>
                    <Button 
                    variant="contained"
                    size = "small"
                    style = {signinstyle.button_icons}
                    >Signin
                    </Button>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
};

export default Signin;