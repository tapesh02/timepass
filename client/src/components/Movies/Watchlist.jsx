import React, { useContext } from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import { wList } from "../../Context";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    cardButton: {
        "&:hover": {
            backgroundColor: "#356E44",
            color: "white",
        },
    },

    Main: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        alignContent: "center",
        justifyContent: "flex-start;",
        columnGap: "2.5rem",
        rowGap: "5px",
    },
    cardMain: {
        width: "200px",
        height: "260px",
        margin: "10px",
        "&:hover": {
            boxShadow: "5px 3px 5px gray",
        },
    },

    cardImage: {
        height: "150px",
        objectFit: "cover",
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

const Watchlist = () => {
    const classes = useStyles();
    const { watchlist, setWatchlist } = useContext(wList);

    const removeFromWatchlist = (movie) => {
        const removeItem = watchlist.filter((watchlist) => watchlist.id !== movie.id);
        setWatchlist(removeItem);
    };
    return (
        <>
            <div className={classes.Main}>
                {watchlist.length === 0
                    ? " Ooops...! You do not have anything yet in your watchlist, please add one..  :-) "
                    : watchlist.map((movie) => {
                          return (
                              <Card className={classes.cardMain} key={movie.id}>
                                  <CardActionArea>
                                      <CardMedia className={classes.cardImage}>
                                          <img
                                              style={{
                                                  width: "100%",
                                                  height: "100%",
                                                  objectFit: "cover",
                                              }}
                                              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                              alt="movie poster"
                                          />
                                      </CardMedia>
                                      <CardContent className={classes.cardContent}>
                                          <Typography>{movie.first_air_date ? movie.name : movie.title}</Typography>
                                          <Typography className={classes.typography1} variant="body2" component="p">
                                              {movie.first_air_date ? movie.first_air_date : movie.release_date}
                                          </Typography>
                                          <Rating
                                              className={classes.typography2}
                                              name="ratings"
                                              value={movie.vote_average / 2}
                                              precision={0.5}
                                              //   onChange={(event, newRating) => {
                                              //     setRatingValue(newRating);
                                              //   }}
                                          />
                                      </CardContent>
                                  </CardActionArea>
                                  <CardActions style={{ justifyContent: "space-evenly" }}>
                                      <Button className={classes.cardButton}>Watch</Button>
                                      <Button className={classes.cardButton}>Share</Button>
                                      <Button className={classes.cardButton} size="small" onClick={() => removeFromWatchlist(movie)}>
                                          Remove
                                      </Button>
                                  </CardActions>
                              </Card>
                          );
                      })}
            </div>
        </>
    );
};

export default Watchlist;
