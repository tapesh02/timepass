import React, { useEffect, useState, useContext } from "react";
import { Grid, Container } from "@material-ui/core";

import { globalContext } from "../../Context/Context.js";
import useGenres from "../../hooks/useGenres";

import NotFound from "./NotFound";
import PageNav from "./PageNav";
import FilterNav from "./FilterNav";
import Trending from "./Trending";
import VideoModal from "./VideoModals/VideoModal";
import SingleTvShowCard from "./SingleTvshowCard.jsx";

const TvShows = () => {
    const { searchText, watchlist, setWatchlist, page, setPage, numberOfPages, setNumberOfPages } = useContext(globalContext);
    const [tvData, setTvData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [showTrending, setShowTrending] = useState(false);

    const [watchTrendingVideo, setWatchTrendingVideo] = useState();
    const [watchTvVideo, setWatchTvVideo] = useState(false);
    const [tvId, setTvId] = useState(false);
    const gUrl = useGenres(selectedGenres);

    const tfilterData = (val) => {
        if (searchText === "") {
            return val;
        } else if (val.name?.toLowerCase().includes(searchText?.toLowerCase())) {
            return val;
        }
    };

    const addToWatchlist = (tvData) => {
        const addItem = [...watchlist, tvData];
        setWatchlist(addItem);
    };

    const handleWatchOpenTv = (tvshowId) => {
        setTvId(tvshowId);
        console.log("clicked open on TV shows");
    };

    const handleWatchCloseTv = () => {
        setWatchTvVideo(false);
        setWatchTrendingVideo(false);
        setTvId("");
        console.log("clicked close on TV show");
    };

    useEffect(() => {
        const getTvshowList = async () => {
            // eslint-disable-next-line
            const tvshowTrendingAPI = `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
            const searchtvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}`;
            const discoverTvUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${gUrl}`;
            //const tresponse = await fetch (searchText ===""? tvshowTrendingAPI : searchtvUrl);

            const tresponse = await fetch(searchText === "" && selectedGenres ? discoverTvUrl : searchtvUrl);
            try {
                const tresponseJson = await tresponse.json();
                const tdata = tresponseJson.results;
                const tpages = tresponseJson.total_pages;
                setTvData(tdata);
                setNumberOfPages(tpages);
            } catch (error) {
                console.log(error);
            }
        };
        getTvshowList();
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
                {showTrending ? (
                    <Trending
                        searchText={searchText}
                        handleWatchCloseTv={handleWatchCloseTv}
                        handleWatchOpenTv={handleWatchOpenTv}
                        watchTvVideo={watchTvVideo}
                        watchTrendingVideo={watchTrendingVideo}
                        setWatchTrendingVideo={setWatchTrendingVideo}
                        tvId={tvId}
                    />
                ) : (
                    <>
                        {watchTvVideo === true ? (
                            <VideoModal handleWatchCloseTv={handleWatchCloseTv} tvId={tvId} />
                        ) : (
                            <Container>
                                <Grid container spacing={1} alignItems="center">
                                    {tvData.length === 0 ? (
                                        <NotFound notfound={searchText} />
                                    ) : (
                                        tvData.filter(tfilterData).map((tvshows) => {
                                            return <SingleTvShowCard tvshows={tvshows} addToWatchlist={addToWatchlist} handleWatchOpenTv={handleWatchOpenTv} setWatchTvVideo={setWatchTvVideo} />;
                                        })
                                    )}
                                </Grid>
                            </Container>
                        )}
                    </>
                )}
            </Grid>
            <PageNav setPage={setPage} page={page} numberOfPages={numberOfPages} />
        </>
    );
};

export default TvShows;
