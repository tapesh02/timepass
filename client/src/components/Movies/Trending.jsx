import React, { useEffect, useState, useContext } from "react";
import { Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles, Container } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import "./Movies.css";
import NotFound from "./NotFound";
import { globalContext } from "../../Context/Context.js";
import VideoModal from "./VideoModals/VideoModal";

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

const Trending = ({
    searchText,
    watchMovieVideo,
    watchTrendingVideo,
    setWatchTrendingVideo,
    handleWatchOpen,
    handleWatchClose,
    movieVideoId,

    handleWatchOpenTv,
    handleWatchCloseTv,
    watchTvVideo,
    //   watchTrendingVideo,
    //   setWatchTrendingVideo,
    tvId,
}) => {
    const classes = useStyles();

    const [movieData, setMovieData] = useState([]);
    // const [watchTrendingVideo, setwatchTrendingVideo] = useState(false)
    const { watchlist, setWatchlist, page, setNumberOfPages } = useContext(globalContext);

    const _category = `${window.location.pathname === "/movies" ? "movies" : "tv"}`;
    // const _id = `${window.location.pathname === "/movies" ? movieVideoId.id : tvId.id}`
    // const _watchVideo = `${window.location.pathname === "/movies" ? watchMovieVideo : watchTvVideo}`

    const addToWatchlist = (movieData) => {
        const addItem = [...watchlist, movieData];
        setWatchlist(addItem);
    };

    useEffect(() => {
        const getMovieList = async () => {
            const TrendingUrl = `https://api.themoviedb.org/3/trending/${_category}/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
            //  const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}`
            // const discoverMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${gUrl}`
            //const tresponse = await fetch (searchText ===""? movieTrendingUrl : searchtvUrl);

            const response = await fetch(TrendingUrl);
            try {
                const responseJson = await response.json();
                const data = responseJson.results;
                const pages = responseJson.total_pages;
                setMovieData(data);
                setNumberOfPages(pages);
            } catch (err) {
                console.error(err);
            }
        };

        getMovieList();

        // eslint-disable-next-line
    }, [page]);

    return (
        <>
            {watchTrendingVideo === true ? (
                <VideoModal handleWatchClose={handleWatchClose} movieVideoId={movieVideoId} handleWatchCloseTv={handleWatchCloseTv} tvId={tvId} />
            ) : (
                <Container style={{ marginBottom: "10px" }}>
                    <Grid container spacing={1} alignItems="center">
                        {movieData.length === 0 ? (
                            <NotFound notfound={searchText} />
                        ) : (
                            movieData.map((movie) => {
                                return (
                                    <Grid item xs={6} sm={3} md={2} lg={2} xl={2} key={movie.id}>
                                        <Card className={classes.cardMain}>
                                            <CardActionArea>
                                                <CardMedia
                                                    height="150"
                                                    component="img"
                                                    className="cardImage"
                                                    image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                    alt="movie poster"
                                                    title={movie.media_type === "movie" ? movie.title : movie.name}
                                                />
                                                <CardContent className={classes.cardContent}>
                                                    <Typography className={classes.movieTitle}> {movie.media_type === "movie" ? movie.title : movie.name} </Typography>
                                                    <Typography className={classes.typography1} variant="body2" component="p">
                                                        {" "}
                                                        {movie.media_type === "movie" ? movie.release_date : movie.first_air_date}
                                                    </Typography>
                                                    <Rating className={classes.typography2} name="ratings" value={movie.vote_average / 2} precision={0.5} readOnly />
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions style={{ justifyContent: "space-evenly" }}>
                                                <Button
                                                    className={classes.root}
                                                    size="small"
                                                    onClick={() => {
                                                        {
                                                            window.location.pathname === "/movies" ? handleWatchOpen(movie) : handleWatchOpenTv(movie);
                                                        }
                                                        setWatchTrendingVideo(true);
                                                    }}>
                                                    Watch
                                                </Button>
                                                <Button className={classes.root} size="small">
                                                    Share
                                                </Button>
                                                <Button className={classes.root} size="small" onClick={() => addToWatchlist(movie)}>
                                                    {" "}
                                                    Add{" "}
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            })
                        )}
                    </Grid>
                </Container>
            )}
        </>
    );
};

export default Trending;
