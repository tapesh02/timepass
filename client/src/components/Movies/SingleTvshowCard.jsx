import React from "react";

import { Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import noImage from "../../images/noImage.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "15px",
        "&:hover": {
            backgroundColor: "#356E44",
            color: "white",
        },
    },
    cardMain: {
        width: "200",
        height: "260",
        margin: "10",
        "&:hover": {
            boxShadow: "5px 3px 5px gray",
        },
    },
    cardContent: {
        width: "95%",
        height: "50px",
        padding: "5px",
        "& .MuiTypography-body1": {
            fontSize: "13px",
            wordBreak: "break-word",
            fontWeight: "bolder",
        },
    },
    movieTitle: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        height: "1.5rem",
        marginBottom: "5px",
    },
    typography1: {
        float: "right",
        "&.MuiTypography-body2": {
            fontSize: "13px",
        },
    },
    typography2: {
        float: "left",
        "&.MuiRating-root": {
            color: "red",
            fontSize: "13px",
        },
    },
    filtermain: {
        color: "white",
        width: "98%",
        margin: "auto",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        border: "1px solid green",
        borderRadius: "5px",
    },
}));

const SingleTvShowCard = ({ tvshows, addToWatchlist, handleWatchOpenTv, setWatchTvVideo }) => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={6} sm={3} md={2} lg={2} xl={2} key={tvshows.id}>
                <Card className={classes.cardMain}>
                    <CardActionArea>
                        <CardMedia
                            height="150px"
                            component="img"
                            style={{ objectFit: "cover" }}
                            image={tvshows.poster_path ? `https://image.tmdb.org/t/p/original/${tvshows.poster_path}` : noImage}
                            alt="tv poster"
                            title={tvshows.name}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.movieTitle}>{tvshows.name}</Typography>
                            <Typography className={classes.typography1} variant="body2" component="p">
                                {tvshows.first_air_date}
                            </Typography>
                            <Rating className={classes.typography2} name="ratings" value={tvshows.vote_average / 2} precision={0.5} readOnly />
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ justifyContent: "space-evenly" }}>
                        <Button
                            className={classes.root}
                            size="small"
                            onClick={() => {
                                handleWatchOpenTv(tvshows);
                                setWatchTvVideo(true);
                            }}>
                            Watch
                        </Button>
                        <Button className={classes.root} size="small">
                            Share
                        </Button>
                        <Button className={classes.root} size="small" onClick={() => addToWatchlist(tvshows)}>
                            Add
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default SingleTvShowCard;
