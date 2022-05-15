import { React, createContext, useState } from "react";

export const globalContext = createContext();

const Context = ({ children }) => {
    const [searchText, setSearchText] = useState("");
    const [watchlist, setWatchlist] = useState([]);
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState();
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleChange = (event) => {
        if (searchText !== "") {
            setSearchText(event.target.value);
        } else if (searchText !== null) {
            setSearchText(event.target.value);
        }
    };

    return (
        <globalContext.Provider value={{ handleChange, searchText, watchlist, setWatchlist, page, setPage, numberOfPages, setNumberOfPages, isSignedIn, setIsSignedIn }}>
            {children}
        </globalContext.Provider>
    );
};

export default Context;
