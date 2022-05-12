import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import LogoComponent from "../Logo/LogoComponent";

// const useStyles = makeStyles((theme) => ({}));

const Navbar = ({ handleChange, searchText }) => {
    // const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };
    const history = useHistory();
    const goToSignin = useCallback(() => {
        history.push("/signin");
        setAnchorEl(null);
    }, [history]);

    const signoutHistory = useHistory();
    const goToSignout = useCallback(() => {
        history.push("/signout");
        setAnchorEl(null);
    }, [signoutHistory]);

    const watchhistory = useHistory();
    const goToWatchlist = useCallback(() => {
        watchhistory.push("/watchlist");
        setAnchorEl(null);
    }, [watchhistory]);

    const moviesHistory = useHistory();
    const goToMovies = useCallback(() => {
        moviesHistory.push("/movies");
        setAnchorEl(null);
    }, [moviesHistory]);

    const tvshowsHistory = useHistory();
    const goTotvshows = useCallback(() => {
        tvshowsHistory.push("/tvshows");
        setAnchorEl(null);
    }, [tvshowsHistory]);

    const handleKeyPress = (event) => {
        if (window.location.pathname === "/movies" && event.key === "Enter" && searchText !== "") {
            history.push("/movies");
        } else if (window.location.pathname === "/tvshows" && event.key === "Enter" && searchText !== "") {
            history.push("/tvshows");
        } else if (searchText === "" && event.key === "Enter") {
            alert("Please enter text to search");
        }
    };
    const handleClick = () => {
        if (searchText === "") {
            alert("Please enter text to search");
        } else if (window.location.pathname === "/movies" && searchText !== "") {
            goToMovies();
        } else if (window.location.pathname === "/tvshows" && searchText !== "") {
            goTotvshows();
        }
    };

    return (
        <>
            <div>
                <AppBar style={{ backgroundColor: "#0e0d0d" }} position="static">
                    <Toolbar>
                        <Typography style={{ flexGrow: 1 }}>
                            <Link to="/home">
                                <LogoComponent />
                            </Link>
                        </Typography>
                        <NavDesktop
                            handleChange={handleChange}
                            searchText={searchText}
                            handleKeyPress={handleKeyPress}
                            handleClick={handleClick}
                            openMenu={openMenu}
                            anchorEl={anchorEl}
                            closeMenu={closeMenu}
                            goToSignin={goToSignin}
                            goToWatchlist={goToWatchlist}
                            goToSignout={goToSignout}
                        />
                        <NavMobile />
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
};
export default Navbar;
