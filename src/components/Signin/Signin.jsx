import React from 'react';
import {Divider, IconButton} from '@material-ui/core';
//import youtubeSvg from '../../images/youtubesvg'; use ../../ to go back to the original directory i.e src/components or src/images etc
import youtubePng from '../../images/youtube.png';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ShareIcon from '@material-ui/icons/Share';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const homeStyle = ({

    background_image:{
        backgroundImage: "url(" + "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"+")",
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
        width: '50%',
        height: '90%',
        margin: '15px',
        padding: '5px',
        backgroundColor: 'purple'
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
    }

});
const Signin = () => {
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
                <div style = {signinstyle.signin_form}><h1 >SignIn Form</h1></div>
            </div>
            </div>
        </section>
        </>
    )
};

export default Signin;