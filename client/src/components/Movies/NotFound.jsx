import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    notfoundimg: {
        width: "100%",
        height: "100%",
        // backgroundImage:`url(${loading})`,  use this if you are importing it form your intenal storage
        //    background: `url(${"https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2"}) ` ,
        backgroundImage: `linear-gradient( to bottom, #0f0f0f, #434343, #7c7c7c, #bcbcbc, #ffffff)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    mainBg: {
        backgroundColor: "transparent",
        width: "100vw",
        height: "91vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
    },
    h1style: {
        fontSize: "2rem",
        fontWeight: "bold",
        textTransform: "capitalize",
        textAlign: "center",
        color: "white",
    },
}));

const NotFound = ({ searchText }) => {
    const classes = useStyles();

    return (
        <>
            <section>
                <div className={classes.notfoundimg}>
                    <div className={classes.mainBg}>
                        <h1 className={classes.h1style}> Sorry... ! No result found for {searchText}</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;
