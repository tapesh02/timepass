import React, { useEffect, useState } from "react";
import { makeStyles, IconButton } from "@material-ui/core";
import "../../Movies/Movies.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CancelIcon from "@material-ui/icons/Cancel";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ReactPlayer from "react-player/lazy";
import { Badge } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    cardButton: {
        display: "flex",
        float: "right",
        color: "white",
        "&:hover": {
            backgroundColor: "transparent",
            cursor: "pointer",
            color: "red",
        },
    },
    showDesktopVideoModal: {
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
}));

const DesktopVideoModal = ({
    handleWatchClose,
    //code even simpler by destructuring the object or props
    movieVideoId,
    handleWatchCloseTv,
    tvId,
}) => {
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
                //console.log(data[0]?.key);
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
                //console.log(cdata.slice(0, 10));
            } catch (err) {
                console.log(err);
            }
        };
        getCastData();
    }, [_id, setCastData]);

    return (
        <>
            <div className={classes.showDesktopVideoModal}>
                <div style={{ width: "93%", marginTop: "2px" }}>
                    <Badge
                        className={classes.cardButton}
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
                </div>
                <div className="modal_outter">
                    {openPlayer === true ? (
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${videos}`} playing={true} width="100%" height="100%" className="react_player" />
                    ) : (
                        <div>
                            <div className="modal">
                                <div className="modal_content">
                                    <div className="modal_img">
                                        <img src={`https://image.tmdb.org/t/p/original/${_poster_path}`} alt="img" />
                                        <div className="modal_header">
                                            <h4> {_title}</h4>
                                            <h5>{_date ? _date.substring(0, 4) : "..."}</h5>
                                            <h6>
                                                {" "}
                                                <span>117</span> Action, Drama, Crime
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="inner_modal">
                                        <p>{_overview}</p>
                                        <IconButton>
                                            <YouTubeIcon onClick={() => setOpenPlayer(!openPlayer)} />
                                        </IconButton>
                                        <IconButton>
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton>
                                            <FavoriteIcon />
                                        </IconButton>
                                    </div>
                                    <div
                                        className="poster_bg"
                                        style={{
                                            background: `linear-gradient(to right, #ffffff, #e4e5e6, #cacccd, #afb3b4, #969b9b), url(${`https://image.tmdb.org/t/p/original/${_backdrop_path} `})  no-repeat  center center`,
                                            backgroundSize: "cover",
                                        }}>
                                        <div className="outer_modal">
                                            <div class="slider">
                                                <div class="slide-track">
                                                    {castData?.map((c) => (
                                                        <div class="slide" key={c.id}>
                                                            {c.profile_path ? (
                                                                <img className="carouselImg" alt={c.name} src={`https://image.tmdb.org/t/p/original${c.profile_path}`} height="100" width="100" />
                                                            ) : (
                                                                <img
                                                                    className="carouselImg"
                                                                    alt={c.name}
                                                                    src={`https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg`}
                                                                    height="100"
                                                                    width="100"
                                                                />
                                                            )}

                                                            <p className="carouselText"> {c.name} </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DesktopVideoModal;
