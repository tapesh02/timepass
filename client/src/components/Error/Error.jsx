import React, { useState } from "react";

import { Button, makeStyles, Typography } from "@material-ui/core";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
    filter: {
        width: "95%",
        height: "25px",
        margin: "auto",
        marginTop: "5px",
        padding: "5px",
        border: "solid 1x white",
        borderRadius: "5px",
        display: "flex",
        color: "black",
        boxShadow: " 0px 2px 3px gray",
        justifyContent: "center",
        alignItems: "center",
    },
}));
const Error = () => {
    const classes = useStyles();

    const [currentFilter, setCurrentFilter] = useState(0);

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

    const nextFilter = () => {
        setCurrentFilter(currentFilter === length - 1 ? 0 : currentFilter + 1);
    };

    const prevFilter = () => {
        setCurrentFilter(currentFilter === 0 ? length - 1 : currentFilter - 1);
    };
    console.log(currentFilter);

    if (!Array.isArray(hotelCards) || hotelCards.length <= 0) {
        return null;
    }

    return (
        <>
            <div className={classes.filter}>
                <KeyboardArrowLeftIcon color="inherit" onClick={nextFilter} />
                {hotelCards.map((FGneres, FGneresId) => (
                    <div style={{ textAlign: "center", padding: "2px", width: "300px" }} key={FGneresId}>
                        {FGneresId === currentFilter && <Button>{FGneres.title}</Button>}
                    </div>
                ))}
                <KeyboardArrowRightIcon color="inherit" onClick={prevFilter} />
            </div>
        </>
    );
};

export default Error;
