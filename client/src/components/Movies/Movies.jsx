import React, { useEffect, useState, useContext } from "react";

import { Grid, Container } from "@material-ui/core";

import { globalContext } from "../../Context/Context.js";
import useGenres from "../../hooks/useGenres";

import NotFound from "./NotFound";
import PageNav from "./PageNav.jsx";
import FilterNav from "./FilterNav";
import Trending from "./Trending";
import VideoModal from "./VideoModals/VideoModal";
import SingleMovieCard from "./SingleMovieCard";

import "./Movies.css";

const Movies = () => {
    const [movieData, setMovieData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const [watchMovieVideo, setWatchMovieVideo] = useState(false);
    const [watchTrendingVideo, setWatchTrendingVideo] = useState(false);
    const [movieVideoId, setMovieVideoId] = useState([]);
    const [showTrending, setShowTrending] = useState(false);

    const { searchText, watchlist, setWatchlist, page, setPage, numberOfPages, setNumberOfPages } = useContext(globalContext);
    const gUrl = useGenres(selectedGenres);

    const filterData = (val) => {
        if (searchText === "") {
            return val;
        } else if (val.title?.toLowerCase().includes(searchText?.toLowerCase())) {
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
            const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}`;
            const discoverMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${gUrl}`;

            const response = await fetch(searchText === "" && selectedGenres ? discoverMovieUrl : movieSearchUrl);
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
    }, [searchText, gUrl, page]);

    useEffect(() => {
        setPage(1);
    }, [showTrending, setPage]);

    return (
        <>
            <Grid
                container
                style={{
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
                        searchText={searchText}
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
                            <Container style={{ marginBottom: "10px" }}>
                                <Grid container spacing={1} alignItems="center">
                                    {movieData.length === 0 ? (
                                        <NotFound searchText={searchText} />
                                    ) : (
                                        movieData.filter(filterData).map((movie) => {
                                            return <SingleMovieCard movie={movie} handleWatchOpen={handleWatchOpen} setWatchMovieVideo={setWatchMovieVideo} addToWatchlist={addToWatchlist} />;
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
