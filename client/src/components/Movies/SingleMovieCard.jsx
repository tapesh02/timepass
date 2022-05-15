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
}));

const SingleMovieCard = ({ movie, handleWatchOpen, setWatchMovieVideo, addToWatchlist }) => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={6} sm={3} md={2} lg={2} xl={2} key={movie.id}>
                <Card className={classes.cardMain}>
                    <CardActionArea>
                        <CardMedia
                            height="150"
                            component="img"
                            className="cardImage"
                            image={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : noImage}
                            alt="movie poster"
                            title={movie.title}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.movieTitle}> {movie.title} </Typography>
                            <Typography className={classes.typography1} variant="body2" component="p">
                                {" "}
                                {movie.release_date}
                            </Typography>
                            <Rating className={classes.typography2} name="ratings" value={movie.vote_average / 2} precision={0.5} readOnly />
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ justifyContent: "space-evenly" }}>
                        <Button
                            className={classes.root}
                            size="small"
                            onClick={() => {
                                handleWatchOpen(movie);
                                setWatchMovieVideo(true);
                            }}>
                            Watch
                        </Button>
                        <Button className={classes.root} size="small">
                            Share
                        </Button>
                        <Button className={classes.root} size="small" onClick={() => addToWatchlist(movie)}>
                            Add
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default SingleMovieCard;
