import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "./Home.css";

const useStyle = makeStyles((theme) => ({
    sub_header: {
        color: "white",
        fontSize: "1em",
        fontWeight: "bold",
        zIndex: "2",
        position: "fixed",
        textAlign: "center",
        margin: "0",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    background_image: {
        backgroundImage: `url(${"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        width: "100vw",
        height: "100vh",
    },

    background_color: {
        backgroundColor: "rgba(53, 110, 68, 0.6)",
        width: "100vw",
        height: "100vh",
        position: "fixed",
    },
    showMobile: {
        [theme.breakpoints.down("sm")]: {
            margin: "auto",
            backgroundColor: "red",
        },
    },
}));
const Home = () => {
    const classes = useStyle();
    return (
        <>
            <Box>
                <div className={classes.background_image}>
                    <div className={classes.background_color}></div>
                    <Container className={classes.sub_header}>
                        <Typography varient="h3" className="header" style={{ fontSize: "2.5rem", zIndex: "2", textAlign: "center" }}>
                            Movie Masti Magic
                        </Typography>
                        <Typography color="inherit" align="center">
                            There are dozens of genres you can pick from, including regular ones for romance, drama, documentary, kids, comedy, and horror films, as well as unique genres like Holiday
                            Movies, Home & Garden, Preschool, and Sword & Sorcery.
                        </Typography>
                    </Container>
                </div>
            </Box>
        </>
    );
};

export default Home;
