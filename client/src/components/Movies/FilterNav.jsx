import React, { useEffect, useState } from "react";

import { Button, Chip, makeStyles, Grow, Paper, Box } from "@material-ui/core";

import DoneIcon from "@material-ui/icons/Done";

const useStyle = makeStyles((theme) => ({
    root: {
        // using classname
        minWidth: "45px",
        "& .MuiButton-label": {
            [theme.breakpoints.down("xs")]: {
                fontSize: "8px",
            },
        },
    },

    filtermain: {
        color: "white",
        width: "98%",
        margin: "auto",
        marginBottom: "10px",
        fontWeight: "bold",
        display: "flex",
        backgroundColor: "white",
        border: "1px solid white",
        borderRadius: "5px",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
        },
    },

    hiddenSpan: {
        flexGrow: "2",
        [theme.breakpoints.down("xs")]: {
            flexGrow: "0",
        },
    },
}));

const FilterNav = ({ genres, setGenres, selectedGenres, setSelectedGenres, setPage, setShowTrending, showTrending }) => {
    const classes = useStyle();
    const [showGenresFilter, setShowGenresFilter] = useState(false);

    const handleAddGenresFilter = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };
    const handleDeleteGenresFilter = (genre) => {
        setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    };
    const handleTrending = () => {
        setShowTrending(!showTrending);
    };

    useEffect(() => {
        const getGenres = async () => {
            const genreUrl = `https://api.themoviedb.org/3/genre/${window.location.pathname === "/movies" ? "movie" : "tv"}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
            const gresponse = await fetch(genreUrl);
            try {
                const gresponseJson = await gresponse.json();
                const gdata = gresponseJson.genres;
                setGenres(gdata);
            } catch (error) {
                console.log(error);
            }
        };
        getGenres();

        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Paper className={classes.filtermain}>
                <Button className={classes.root}>Recently Added </Button>
                <Button className={classes.root} color={showTrending === true ? "secondary" : "default"} onClick={handleTrending}>
                    Trending
                </Button>
                <span className={classes.hiddenSpan}></span>
                <Button className={classes.root}>Year</Button>
                <Button
                    className={classes.root}
                    color={showGenresFilter ? "secondary" : "default"}
                    aria-controls="genresId"
                    aria-haspopup="true"
                    onClick={() => setShowGenresFilter(!showGenresFilter)}>
                    Genre
                </Button>
                <Button className={classes.root}>Language</Button>
                <Button className={classes.root}>Sort by</Button>
            </Paper>

            {showGenresFilter ? (
                <Grow in={showGenresFilter} style={{ transformOrigin: "0 0 0" }} {...(showGenresFilter ? { timeout: 1000 } : {})}>
                    <Box style={{ margin: "3px ", padding: "3px" }}>
                        {selectedGenres?.map((genre) => (
                            <Chip
                                variant="outlined"
                                size="small"
                                style={{
                                    backgroundColor: "green",
                                    margin: "3px 2px",
                                    borderColor: "none",
                                    color: "whitesmoke",
                                    fontWeight: "400",
                                }}
                                clickable
                                label={genre.name}
                                key={genre.id}
                                onDelete={() => handleDeleteGenresFilter(genre)}
                            />
                        ))}
                        {genres?.map((genre) => (
                            <Chip
                                variant="outlined"
                                size="small"
                                style={{
                                    margin: "3px 2px",
                                    backgroundColor: "whitesmoke",
                                    borderColor: "none",
                                }}
                                clickable
                                label={genre.name}
                                key={genre.id}
                                deleteIcon={<DoneIcon />}
                                onClick={() => handleAddGenresFilter(genre)}
                            />
                        ))}
                    </Box>
                </Grow>
            ) : null}
        </>
    );
};

export default FilterNav;
