import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
}));
const Error = () => {
    const hotelCards = [
        {
            id: "1",
            title: "Action",
        },
        {
            id: "2",
            title: "Adventure",
        },
        {
            id: "3",
            title: "Comedy",
        },
        {
            id: "4",
            title: "Documentary",
        },
        {
            id: "5",
            title: "Drama",
        },
        {
            id: "6",
            title: "Family",
        },
        {
            id: "7",
            title: "Fantasy",
        },
        {
            id: "8",
            title: "History",
        },
        {
            id: "9",
            title: "Horror",
        },
        {
            id: "10",
            title: "Music",
        },
        {
            id: "11",
            title: "Mystery",
        },
        {
            id: "12",
            title: "Romance",
        },
        {
            id: "13",
            title: "Sci-Fi",
        },
    ];
    const length = hotelCards.length;

    const classes = useStyles();
    const [value, setValue] = useState(length);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(event.target.textContent);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs value={value} onChange={handleChange} aria-label="scrollable force tabs example" variant="scrollable" scrollButtons="on" indicatorColor="primary" textColor="primary">
                    {hotelCards.map((FGneres) => (
                        <Tab id={FGneres.id} label={FGneres.title}>
                            {FGneres.title}
                        </Tab>
                    ))}
                </Tabs>
            </AppBar>
        </div>
    );
};
export default Error;
