import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Fade, IconButton, InputAdornment, makeStyles, Menu, MenuItem, TextField } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
    showDesktop: {
        backgroundColor: "#0e0d0d",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        },
    },
    textbox: {
        "& .MuiOutlinedInput-root": {
            color: "white",
            border: "1px solid white",
            zIndex: "1",
            "&.Mui-focused fieldset": {
                borderColor: "transparent",
            },
        },
    },
}));
const NavDesktop = ({ handleChange, searchText, handleKeyPress, handleClick, openMenu, anchorEl, closeMenu, goToSignin, goToWatchlist, goToSignout }) => {
    const classes = useStyles();
    const open = Boolean(anchorEl);

    return (
        <>
            <Box className={classes.showDesktop}>
                <TextField
                    id="input-with-icon-textfield"
                    className={classes.textbox}
                    size="small"
                    placeholder="search"
                    variant="outlined"
                    value={searchText}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" onClick={handleClick}>
                                <SearchIcon style={{ color: "white", cursor: "pointer" }} />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button color="inherit" component={Link} to="/home">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/movies">
                    Movies
                </Button>
                <Button color="inherit" component={Link} to="/tvshows">
                    Tv Shows
                </Button>

                <IconButton className="account_icon" onClick={openMenu}>
                    <AccountCircleIcon fontSize="small" color="primary" />
                </IconButton>
                <Menu id="menu" anchorEl={anchorEl} keepMounted open={open} onClose={closeMenu} TransitionComponent={Fade}>
                    <MenuItem onClick={goToSignin}> Sign In</MenuItem>
                    <MenuItem onClick={goToWatchlist}> Watchlist</MenuItem>
                    <MenuItem onClick={goToSignout}> Sign Out</MenuItem>
                </Menu>
            </Box>
        </>
    );
};

export default NavDesktop;
