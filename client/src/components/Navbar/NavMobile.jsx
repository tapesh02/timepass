import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
    showMobile: {
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

const NavMobile = () => {
    const classes = useStyles();
    return (
        <>
            <IconButton color="inherit" className={classes.showMobile}>
                <MoreVertIcon></MoreVertIcon>
            </IconButton>
        </>
    );
};

export default NavMobile;