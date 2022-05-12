import React, { useContext, useEffect } from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles, Container, Grid } from "@material-ui/core";
import { wList } from "../../Context";
import { Rating } from "@material-ui/lab";
import { useHistory } from "react-router-dom";

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

const Watchlist = () => {
    const classes = useStyles();
    const { watchlist, setWatchlist } = useContext(wList);

    const history = useHistory();

    const removeFromWatchlist = (movie) => {
        const removeItem = watchlist.filter((watchlist) => watchlist.id !== movie.id);
        setWatchlist(removeItem);
    };

    useEffect(() => {
        const callWatchlistPage = async () => {
            try {
                const res = await fetch("/watchlist", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });
                const data = await res.json();
                console.log(data);
                if (!res.status === 200 || !data) {
                    const error = new Error(res.error);
                    throw error;
                }
            } catch (error) {
                console.log(error);
                history.push("/signin");
            }
        };
        callWatchlistPage();
    }, []);

    return (
        <>
            <Container>
                <form method="GET">
                    <h6> </h6>
                </form>
                <Grid container spacing={1} alignItems="center">
                    {watchlist.length === 0
                        ? " Ooops...! You do not have anything yet in your watchlist, please add one..  :-) "
                        : watchlist.map((movie) => {
                              return (
                                  <Grid item xs={6} sm={3} md={2} lg={2} xl={2} key={movie.id}>
                                      <Card className={classes.cardMain}>
                                          <CardActionArea>
                                              <CardMedia
                                                  height="150px"
                                                  component="img"
                                                  style={{ objectFit: "cover" }}
                                                  image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                  alt="movieposter"
                                                  title="title"
                                              />
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
                                              <Button className={classes.root}>Watch</Button>
                                              <Button className={classes.root}>Share</Button>
                                              <Button className={classes.root} size="small" onClick={() => removeFromWatchlist(movie)}>
                                                  Remove
                                              </Button>
                                          </CardActions>
                                      </Card>
                                  </Grid>
                              );
                          })}
                </Grid>
            </Container>
        </>
    );
};

export default Watchlist;
