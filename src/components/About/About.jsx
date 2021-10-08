import { Divider, IconButton, Button, InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import "./About.css"
import AboutDetailsComponent from "./AboutDetailsComponent.jsx"
import LogoComponent from "../Logo/LogoComponent.jsx"
import mongodbLogo from "../../images/mongodbLogo.svg"
import reactlogo from "../../images/reactlogo.svg"
import nodejsLogo from "../../images/nodejsLogo.svg"
import gitlogo from "../../images/gitlogo.svg"
import themoviedbLogo from "../../images/themoviedbLogo.svg"
import unsplashlogo from "../../images/unsplashlogo.svg"

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MessageIcon from '@material-ui/icons/Message';
import EmailIcon from '@material-ui/icons/Email';




const About = () =>{

    const aboutstyle =( {

        aboutDetailsComponentstyle:{
            left : '50%',
            right: '50%',
            position: 'relative',
            transform : 'translate(-50%, 0%)'
        }
    })
    return (
        <>
        <section>
            <div className = "main-header">
                <div className = "header-img">
                    <div className="bg-layer">
                    </div> 
                </div>
                <h1>Welcome To MovieHunt</h1>
            </div>
            <div className="about-main">
                <div className="about-header">
                    <Divider/>
                    <h3>About Us</h3>
                </div>
                <div className="about-details">
                <p>
                Hello and welcome to MovieHunt, the place to find the best rated movies, tv shows and tarilers for every taste and occasion. We thoroughly check the quality of our movie prints, working only with reliable suppliers so that you only receive the best quality service.

                We at MovieHunt believe in high quality and exceptional customer service. Most importantly, we consider entertainment as a right, not an extravagance, so we strive to provide the best experience at no cost, because we believe that entertainment is a joy, and everyone deserves to share cherished memories with family, friends, and anyone else.
                </p>
                </div>
            </div>
             <AboutDetailsComponent style  = {aboutstyle.aboutDetailsComponentstyle} />
            <div className="about-main2">
            <div className="about-header">
                    <Divider/>
                    <h3>Service Providers</h3>
                </div>
                <div className="service-providersdetails">
                <div className = "service-providerslogo">
                    <img className = "logoimg" src = {mongodbLogo} alt = "mongodbLogo"/>
                    <img className = "logoimg" src = {unsplashlogo} alt = "unsplashlogo"/>
                    <img className = "logoimg" src = {themoviedbLogo} alt = "themoviedbLogo"/>
                    <img className = "logoimg2" src = {nodejsLogo} alt = "nodejsLogo"/>
                    <img className = "logoimg3" src = {reactlogo} alt = "reactlogo"/>
                    <img className = "logoimg2" src = {gitlogo} alt = "gitlogo"/>
                </div>
                </div>
            </div>
           
            <div className="about-main3">
            <div className="about-header">
                    <LogoComponent/>
                    <div >
                    <IconButton className="sociallogobtn">
                        <FacebookIcon  style = {{color: '#e6fff6'}}/>
                    </IconButton >
                    <IconButton className="sociallogobtn">
                        <TwitterIcon  style = {{color: '#e6fff6'}} />
                    </IconButton>
                    <IconButton className="sociallogobtn">
                        <LinkedInIcon  style = {{color: '#e6fff6'}} />
                    </IconButton>
                    <IconButton className="sociallogobtn">
                        <GitHubIcon  style = {{color: '#e6fff6'}}/>
                    </IconButton>
                    </div>
                </div>
                <div className="about-address-details">
                    <div className="emailmain">
                            <div className="email">
                            <h4>Any Questions?</h4>
                             </div>
                            <div className="email-input">
                                
                                <TextField 
                                        id = "subscribeEmail" 
                                        label = "Enter email" 
                                        variant = "outlined" 
                                        size = "small"
                                        margin = "dense"
                                        InputProps ={{
                                            startAdornment : <InputAdornment position = "start"> <EmailIcon/> </InputAdornment>
                                        }}

                                />
                                <TextField 
                                        id = "subscribeDescription" 
                                        label = "Description" 
                                        variant = "outlined" 
                                        size = "small"
                                        margin = "dense"
                                        InputProps = {{
                                            startAdornment : <InputAdornment position = "start"> <MessageIcon/> </InputAdornment>
                                        }}
                                />

                                <Button style = {{color : "white", float: "right", outline : "1px white"}}>
                                    Send
                                </Button>
                            </div>
                    </div>
                    <div className="addresdetails">
                                <address>
                                    <div className = "add-header"> 
                                    <h4>Address</h4>
                                    </div>
                                     <div className = "add-details">   
                                    <p>Apt - 202, Burnell Square  <br/>
                                        Near Aldi Shopping Mall <br/>
                                        Dublin 8, Dublin <br/>
                                        Ireland - W154D11
                                    </p>
                                    </div>
                                </address>
                            </div>
                </div>
            </div>

        </section>
        </>
    )
};
export default About;