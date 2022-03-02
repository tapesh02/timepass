import React, { useEffect, useState } from "react";
import { Button, Chip, makeStyles, Grow } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

const useStyle = makeStyles((theme) => ({
    filtermain: {
        color: "white",
        width: "98%",
        margin: "auto",
        marginBottom: "10px",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        border: "1px solid green",
        borderRadius: "5px",
    },
}));

const FilterNav = ({ genres, setGenres, selectedGenres, setSelectedGenres, setPage, setShowTrending, showTrending }) => {
    const [showGenresFilter, setShowGenresFilter] = useState(false);

    const styles = useStyle();

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
            <div className={styles.filtermain}>
                <div>
                    <Button>Recently Added </Button>
                    <Button color={showTrending === true ? "secondary" : "default"} onClick={handleTrending}>
                        Most Popular
                    </Button>
                </div>
                <div>
                    <Button>Year</Button>
                    <Button color={showGenresFilter ? "secondary" : "default"} aria-controls="genresId" aria-haspopup="true" onClick={() => setShowGenresFilter(!showGenresFilter)}>
                        Genre
                    </Button>
                    <Button>Language</Button>
                    <Button>Sort by</Button>
                </div>
            </div>

            {showGenresFilter ? (
                <Grow in={showGenresFilter} style={{ transformOrigin: "0 0 0" }} {...(showGenresFilter ? { timeout: 1000 } : {})}>
                    <div style={{ margin: "3px ", padding: "3px" }}>
                        {selectedGenres?.map((genre) => (
                            <Chip
                                variant="outlined"
                                size="small"
                                style={{
                                    backgroundColor: "whitesmoke",
                                    borderColor: "none",
                                    color: "green",
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
                                    marginTop: "3px",
                                    marginLeft: "2px",
                                    marginRight: "2px",
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
                    </div>
                </Grow>
            ) : null}
        </>
    );
};

export default FilterNav;
