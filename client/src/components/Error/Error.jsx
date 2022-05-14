import React from "react";

import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    errorMain: {
        backgroundImage: `url(${"https://images.unsplash.com/photo-1487525219605-eadb39ae229c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1991&q=80"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "space-around",
    },

    errorTitle: {
        color: "rgb(255, 255, 255)",
        fontSize: "3em",
    },
}));

const Error = () => {
    const classes = useStyle();
    return (
        <>
            <div className={classes.errorMain}>
                <h1 className={classes.errorTitle}>
                    Lost somewhere ..? <br></br> Don't worry you can go back to home
                    <br></br>
                    <Button variant="contained" href="/home">
                        Go back home
                    </Button>
                </h1>
            </div>
        </>
    );
};
export default Error;
