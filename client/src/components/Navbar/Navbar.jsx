import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { AppBar, Snackbar, Toolbar, Typography } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

import LogoComponent from "../Logo/LogoComponent";

import "./Navbar.css";
import { globalContext } from "../../Context/Context";

const Navbar = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [showError, setShowError] = useState(false);

    const { handleChange, searchText } = useContext(globalContext);

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    const handleKeyPress = (event) => {
        if (window.location.pathname === "/movies" && event.key === "Enter" && searchText !== "") {
            history.push("/movies");
        } else if (window.location.pathname === "/tvshows" && event.key === "Enter" && searchText !== "") {
            history.push("/tvshows");
        } else if (searchText === "" && event.key === "Enter") {
            setShowError(true);
        }
    };

    const handleSearch = () => {
        if (searchText === "") {
            setShowError(true);
        } else if (window.location.pathname === "/home" && searchText !== "") {
            history.push("/movies");
            setAnchorEl(null);
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
                            handleSearch={handleSearch}
                            openMenu={openMenu}
                            anchorEl={anchorEl}
                            closeMenu={closeMenu}
                        />
                        <NavMobile
                            handleChange={handleChange}
                            searchText={searchText}
                            handleKeyPress={handleKeyPress}
                            handleSearch={handleSearch}
                            openMenu={openMenu}
                            anchorEl={anchorEl}
                            closeMenu={closeMenu}
                        />
                    </Toolbar>
                </AppBar>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                open={showError}
                onClose={setShowError}
                autoHideDuration={3000}>
                <Alert severity="error">Please enter search text !</Alert>
            </Snackbar>
        </>
    );
};
export default Navbar;
