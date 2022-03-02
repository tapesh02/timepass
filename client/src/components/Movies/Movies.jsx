import React, { useEffect, useState, useContext } from "react";
import { Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles, Container } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import "./Movies.css";
import NotFound from "./NotFound";
import { wList } from "../../Context.js";
import PageNav from "./PageNav.jsx";
import FilterNav from "./FilterNav";
import useGenres from "../../hooks/useGenres";
import Trending from "./Trending";
import VideoModal from "./VideoModal";

const useStyles = makeStyles((theme) => ({
    cardButton: {
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

const Movies = (props) => {
    const classes = useStyles();

    const [movieData, setMovieData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const [watchMovieVideo, setWatchMovieVideo] = useState(false);
    const [watchTrendingVideo, setWatchTrendingVideo] = useState();
    const [movieVideoId, setMovieVideoId] = useState([]);
    const [showTrending, setShowTrending] = useState(false);

    const { watchlist, setWatchlist, page, setPage, numberOfPages, setNumberOfPages } = useContext(wList);
    const gUrl = useGenres(selectedGenres);

    const filterData = (val) => {
        if (props.searchText === "") {
            return val;
        } else if (val.title?.toLowerCase().includes(props.searchText?.toLowerCase())) {
            return val;
        }
    };

    const addToWatchlist = (movieData) => {
        const addItem = [...watchlist, movieData];
        setWatchlist(addItem);
    };
    const handleWatchOpen = (movied) => {
        setMovieVideoId(movied);
        console.log("handleWatchOpen clicked on movies");
    };
    const handleWatchClose = () => {
        setWatchMovieVideo(false);
        setWatchTrendingVideo(false);
        console.log("handleWatchClose clicked on movies");
        setMovieVideoId("");
    };
    useEffect(() => {
        const getMovieList = async () => {
            const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${props.searchText}&page=${page}`;
            const discoverMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${gUrl}`;

            const response = await fetch(props.searchText === "" && selectedGenres ? discoverMovieUrl : movieSearchUrl);
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
    }, [props.searchText, gUrl, page]);

    useEffect(() => {
        setPage(1);
    }, [showTrending, setPage]);

    return (
        <>
            <Grid
                container
                style={{
                    backgroundColor: "black",
                    width: "100",
                    height: "100",
                    padding: "5",
                    margin: "5",
                }}>
                <FilterNav
                    genres={genres}
                    setGenres={setGenres}
                    selectedGenres={selectedGenres}
                    setSelectedGenres={setSelectedGenres}
                    setPage={setPage}
                    setShowTrending={setShowTrending}
                    showTrending={showTrending}
                />

                {showTrending === true ? (
                    <Trending
                        searchText={props.searchText}
                        watchMovieVideo={watchMovieVideo}
                        watchTrendingVideo={watchTrendingVideo}
                        setWatchTrendingVideo={setWatchTrendingVideo}
                        handleWatchOpen={handleWatchOpen}
                        handleWatchClose={handleWatchClose}
                        movieVideoId={movieVideoId}
                    />
                ) : (
                    <>
                        {watchMovieVideo === true ? (
                            <VideoModal handleWatchClose={handleWatchClose} movieVideoId={movieVideoId} />
                        ) : (
                            <Container>
                                <Grid container spacing={1} alignItems="center">
                                    {movieData.length === 0 ? (
                                        <NotFound />
                                    ) : (
                                        movieData.filter(filterData).map((movie) => {
                                            return (
                                                <Grid item xs={6} sm={6} md={2} lg={2} xl={2} key={movie.id}>
                                                    <Card className={classes.cardMain}>
                                                        <CardActionArea>
                                                            <CardMedia
                                                                height="150"
                                                                component="img"
                                                                className="cardImage"
                                                                image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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
                                                                className={classes.cardButton}
                                                                size="small"
                                                                onClick={() => {
                                                                    handleWatchOpen(movie);
                                                                    setWatchMovieVideo(true);
                                                                }}>
                                                                Watch
                                                            </Button>
                                                            <Button className={classes.cardButton} size="small">
                                                                Share
                                                            </Button>
                                                            <Button className={classes.cardButton} size="small" onClick={() => addToWatchlist(movie)}>
                                                                Add
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
                )}
            </Grid>
            {watchMovieVideo === false ? <PageNav setPage={setPage} page={page} numberOfPages={numberOfPages} /> : null}
        </>
    );
};
export default Movies;
