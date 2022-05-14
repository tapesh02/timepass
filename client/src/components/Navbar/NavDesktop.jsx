import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { Box, Button, Fade, IconButton, InputAdornment, makeStyles, Menu, MenuItem, TextField } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { globalContext } from "../../Context/Context.js";

const useStyles = makeStyles((theme) => ({
    showDesktop: {
        alignItems: "center",
        gap: "5px",
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
const NavDesktop = ({ handleChange, searchText, handleKeyPress, handleSearch, openMenu, anchorEl, closeMenu }) => {
    const classes = useStyles();
    const open = Boolean(anchorEl);

    const { isSignedIn } = useContext(globalContext);

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
                            <InputAdornment position="start" onClick={handleSearch}>
                                <SearchIcon style={{ color: "white", cursor: "pointer" }} />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button component={NavLink} to="/home">
                    {" "}
                    Home
                </Button>
                <Button component={NavLink} to="/movies">
                    Movies
                </Button>
                <Button component={NavLink} to="/tvshows">
                    Tv Shows
                </Button>

                <IconButton className="account_icon" onClick={openMenu}>
                    <AccountCircleIcon fontSize="medium" style={{ color: "white" }} />
                </IconButton>
                <Menu id="menu" anchorEl={anchorEl} keepMounted open={open} onClose={closeMenu} TransitionComponent={Fade}>
                    {!isSignedIn ? (
                        <MenuItem component={NavLink} to="/signin">
                            Sign In
                        </MenuItem>
                    ) : (
                        <MenuItem component={NavLink} to="/signout">
                            Sign Out
                        </MenuItem>
                    )}

                    <MenuItem component={NavLink} to="/watchlist">
                        Watchlist
                    </MenuItem>
                </Menu>
            </Box>
        </>
    );
};

export default NavDesktop;
