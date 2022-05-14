import React, { useState, useCallback } from "react";
import { useHistory } from "react-router";

import { Divider, FormControl, OutlinedInput, InputLabel, InputAdornment, Button, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import YouTubeIcon from "@material-ui/icons/YouTube";

import youtube from "../../images/youtube.png";

const useStyles = makeStyles((theme) => ({
    background_image: {
        backgroundImage: `url(${"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"})`,
        backgroudPosition: "center center",
        backgroundSize: "cover",
        backgroudRepeat: "no-repeat",
        position: "fixed",
        minWidth: "100%",
        minHeight: "100%",
        marginTop: "-5px",
    },
    background_color: {
        backgroundColor: "rgba(53, 110, 68, 0.6)",
        minWidth: "100%",
        minHeight: "100%",
        position: "fixed",
    },
    signup_bg: {
        width: "60%",
        height: "70%",
        backgroundColor: "white",
        position: "absolute",
        zIndex: "2",
        margin: "0",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "15px",
        [theme.breakpoints.down("xs")]: {
            width: " 95%",
            height: "auto",
            top: "45%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "80%",
        },
    },
    signup_outter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "5px",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            height: "100%",
        },
    },
    signup_innerimg: {
        width: "50%",
        height: "370px",
        margin: "5px",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    signupimage: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },

    imageIcons: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    signup_form: {
        width: "50%",
        height: "370px",
        display: "grid",
        alignContent: "center",
        justifyItems: "end",
        justifyContent: "space-around",
        [theme.breakpoints.down("xs")]: {
            width: "80%",
            flexDirection: "column",
            justifyContent: "center",
            height: "auto",
        },
    },
    outer_button: {
        marginTop: "45px",
        display: "flex",
        justifyContent: "flex-end",
        [theme.breakpoints.down("xs")]: {
            margin: "20px 0px",
        },
    },

    buttonStyle: {
        fontSize: "0.8rem",
        textTransform: "capitalize",
        backgroundColor: "#DFDFDF",
        borderRadius: "10px",
        boxShadow: "0px 2px 2px #000000",
        "&:hover": {
            backgroundColor: "#356E44",
            color: "#ffff",
        },
    },

    iconStyle: {
        color: "grey",
        fontSize: "20px",
    },
}));

const Signup = () => {
    const classes = useStyles();
    const history = useHistory();

    const [userdetails, setUserdetails] = useState({
        username: "",
        email: "",
        cpassword: "",
        retypePassword: "",
    });

    const handleChangeUserdetail = (event) => {
        setUserdetails({ ...userdetails, [event.target.name]: event.target.value });
    };
    //Use this for testing for forntend test with adding the OnsubmitForm fuction to form element
    // const OnSubmitForm = (event) => {
    //     event.preventDefault();
    //     console.log(userdetails);
    // };
    const submitData = async (event) => {
        event.preventDefault();
        const { username, email, cpassword, retypePassword } = userdetails;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                cpassword,
                retypePassword,
            }),
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Unsuccessful registration");
        } else {
            window.alert("Successful registration");
            history.push("/signin");
        }
    };

    const goToSignin = useCallback(() => {
        history.push("/signin");
    }, [history]);

    return (
        <>
            <section>
                <div className={classes.background_image}>
                    <div className={classes.background_color}></div>

                    <div className={classes.signup_bg}>
                        <div className={classes.signup_outter}>
                            <div className={classes.signup_innerimg}>
                                <div>
                                    <img src={youtube} alt="signupimage" className={classes.signupimage} />
                                </div>
                                <div className={classes.imageIcons}>
                                    <IconButton disabled="false">
                                        <YouTubeIcon style={{ color: "orange" }} /> <p style={{ fontSize: "16px", marginLeft: "5px" }}>Watch</p>
                                    </IconButton>
                                    <IconButton disabled="false">
                                        <YouTubeIcon style={{ color: "orange" }} /> <p style={{ fontSize: "16px", marginLeft: "5px" }}>Share</p>{" "}
                                    </IconButton>
                                    <IconButton disabled="false">
                                        <YouTubeIcon style={{ color: "orange" }} /> <p style={{ fontSize: "16px", marginLeft: "5px" }}>Like</p>
                                    </IconButton>
                                </div>
                            </div>

                            <Divider orientation="vertical" />

                            <div className={classes.signup_form}>
                                {/* <form onSubmit={OnSubmitForm} style={{ display: "flex", flexDirection: "column" }}> // for testing purpose only   */}
                                <form method="POST" style={{ display: "flex", flexDirection: "column" }}>
                                    <Typography varient="h5" style={{ margin: "5px", padding: "10px" }}>
                                        Welcome{" "}
                                    </Typography>

                                    <FormControl variant="outlined" size="small" style={{ marginTop: "5px", marginBottom: "5px" }}>
                                        <InputLabel htmlFor="outlinedinput-adornment-username">Username</InputLabel>
                                        <OutlinedInput
                                            id="outlined-username-input"
                                            variant="outlined"
                                            autoComplete="off"
                                            labelWidth={72}
                                            name="username"
                                            value={userdetails.username}
                                            onChange={handleChangeUserdetail}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <PersonIcon className={classes.iconStyle} />
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <FormControl variant="outlined" size="small" style={{ marginTop: "5px", marginBottom: "5px" }}>
                                        <InputLabel htmlFor="outlinedinput-adornment-email">Email</InputLabel>
                                        <OutlinedInput
                                            id="outlined-email-input"
                                            variant="outlined"
                                            autoComplete="off"
                                            labelWidth={40}
                                            type="email"
                                            name="email"
                                            value={userdetails.email}
                                            onChange={handleChangeUserdetail}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <EmailIcon className={classes.iconStyle} />
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <FormControl variant="outlined" size="small" style={{ marginTop: "5px", marginBottom: "5px" }}>
                                        <InputLabel htmlFor="outlined-cpassword-input">Create password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-cpassword-input"
                                            variant="outlined"
                                            labelWidth={120}
                                            type="password"
                                            name="cpassword"
                                            value={userdetails.cpassword}
                                            onChange={handleChangeUserdetail}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <LockIcon className={classes.iconStyle} />
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <FormControl variant="outlined" size="small" style={{ marginTop: "5px", marginBottom: "5px" }}>
                                        <InputLabel htmlFor="outlined-retypePassword-input">Retype password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-retypePassword-input"
                                            variant="outlined"
                                            labelWidth={125}
                                            type="password"
                                            name="retypePassword"
                                            value={userdetails.retypePassword}
                                            onChange={handleChangeUserdetail}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <LockIcon className={classes.iconStyle} />
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                    <div className={classes.outer_button}>
                                        <Button className={classes.buttonStyle} style={{ marginRight: "5px" }} type="submit" onClick={submitData}>
                                            Signup
                                        </Button>
                                        <Button className={classes.buttonStyle} style={{ marginLeft: "5px" }} onClick={goToSignin}>
                                            Signin
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;
