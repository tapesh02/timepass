import React, { useEffect, useState } from "react";
import { Button, Container, makeStyles, Paper, Typography } from "@material-ui/core";

import LinesEllipsis from "react-lines-ellipsis";
import ReactPlayer from "react-player/lazy";
import { Badge } from "@mui/material";
import "../../Movies/Movies.css";

import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
    showMobileVideoModal: {
        display: "none",
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
        },
    },
    moviePoster: {
        width: "100%",
        height: "98%",
        background: ` linear-gradient(to bottom, #a4a0a0, #b8b6b6, #cdcccd, #e3e2e3, #f9f9f9)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingBottom: "2%",
        "& img": {
            width: "100%",
            height: "45%",
            objectFit: "cover",
        },
    },
    cardContent: {
        width: "95%",
        height: "5%",
        margin: "1%",
        padding: "1%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& > *": {
            fontSize: "1rem",
            fontWeight: "400",
            color: "inherit",
        },
    },
    cardText: {
        width: "100%",
        height: "15%",
        padding: "5px",
        marginTop: "-2%",
    },
    cardButton: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "1%",
        marginBottom: "2%",
        color: "white",
    },
    span: {
        marginRight: "2.5px",
        padding: "2.5px",
        width: "fit-content",
        borderRadius: "5px",
        border: "1px solid rgba(0, 0, 0, 0.5)",
    },
    cancleButton: {
        float: "right",
        color: "white",
    },
}));

const MobileVideoModal = ({ movieVideoId, tvId, handleWatchCloseTv, handleWatchClose }) => {
    const classes = useStyles();

    const [openPlayer, setOpenPlayer] = useState(false);
    const [videos, setVideos] = useState();
    const [castData, setCastData] = useState();

    const _id = `${window.location.pathname === "/movies" ? movieVideoId.id : tvId.id}`;
    const _poster_path = `${window.location.pathname === "/movies" ? movieVideoId.poster_path : tvId.poster_path}`;
    const _title = `${window.location.pathname === "/movies" ? movieVideoId.title : tvId.name}`;
    const _date = `${window.location.pathname === "/movies" ? movieVideoId.release_date : tvId.first_air_date}`;
    const _overview = `${window.location.pathname === "/movies" ? movieVideoId.overview : tvId.overview}`;
    const _backdrop_path = `${window.location.pathname === "/movies" ? movieVideoId.backdrop_path : tvId.backdrop_path}`;

    useEffect(() => {
        const getVideoData = async () => {
            const videoAPI = `https://api.themoviedb.org/3/${window.location.pathname === "/movies" ? "movie" : "tv"}/${_id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
            const response = await fetch(_id !== undefined ? videoAPI : null);
            try {
                const responseJson = await response.json();
                const data = responseJson.results;
                setVideos(data[0]?.key);
                console.log(data[0]?.key);
            } catch (err) {
                console.log(err);
            }
        };
        getVideoData();
    }, [_id]);

    useEffect(() => {
        const getCastData = async () => {
            const castAPI = `https://api.themoviedb.org/3/${window.location.pathname === "/movies" ? "movie" : "tv"}/${_id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
            const response = await fetch(_id !== undefined ? castAPI : null);
            try {
                const responseJson = await response.json();
                const cdata = responseJson.cast;
                setCastData(cdata.slice(0, 10));
                console.log(cdata.slice(0, 10));
            } catch (err) {
                console.log(err);
            }
        };
        getCastData();
    }, [_id, setCastData]);

    return (
        <>
            <div className={classes.showMobileVideoModal}>
                <Container>
                    <Badge
                        className={classes.cancleButton}
                        size="small"
                        onClick={() => {
                            {
                                window.location.pathname === "/movies" ? handleWatchClose() : handleWatchCloseTv();
                            }
                            setOpenPlayer(false);
                        }}
                        color="secondary">
                        <CancelIcon />
                    </Badge>
                    <Container>
                        {openPlayer === true ? (
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${videos}`} playing={true} width="100%" height="100%" className="react_player" />
                        ) : (
                            <Paper elevation={3} className={classes.moviePoster}>
                                <img src={`https://image.tmdb.org/t/p/original/${_poster_path}`} alt="movieposter"></img>
                                <Typography variant="h5" style={{ padding: "1%", margin: "1%" }}>
                                    {_title}
                                </Typography>
                                <Typography style={{ padding: "1%", margin: "1%" }}>{_date ? _date.substring(0, 4) : "..."}</Typography>
                                <Typography style={{ padding: "1%", margin: "1%" }}>
                                    <span className={classes.span}>117</span> Action, Drama, Crime
                                </Typography>
                                {/* <div className={classes.cardContent}>
                                    <Rating name="ratings" value={10} precision={0.5} readOnly />
                                    <Typography> 20/12/202</Typography>
                                </div> */}
                                <div className={classes.cardText}>
                                    <LinesEllipsis text={_overview} maxLine="5" ellipsis="..." trimRight basedOn="letters" style={{ padding: "1%", margin: "1%" }}></LinesEllipsis>
                                </div>
                                <div className="outer_modal">
                                    <div class="slider">
                                        <div class="slide-track">
                                            {castData?.map((c) => (
                                                <div class="slide" key={c.id}>
                                                    {c.profile_path ? (
                                                        <img className="carouselImg" alt={c.name} src={`https://image.tmdb.org/t/p/original${c.profile_path}`} height="50" width="50" />
                                                    ) : (
                                                        <img
                                                            className="carouselImg"
                                                            alt={c.name}
                                                            src={`https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg`}
                                                            height="50"
                                                            width="50"
                                                        />
                                                    )}

                                                    <p className="carouselText"> {c.name} </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <Button className={classes.cardButton} style={{ backgroundColor: "green", width: "35%", margin: "auto" }} onClick={() => setOpenPlayer(!openPlayer)}>
                                    watch now
                                </Button>
                            </Paper>
                        )}
                    </Container>
                </Container>
            </div>
        </>
    );
};

export default MobileVideoModal;
