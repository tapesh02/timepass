import { React, createContext, useState } from "react";

export const globalContext = createContext();

const Context = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState();
    const [isSignedIn, setIsSignedIn] = useState(false);

    return <globalContext.Provider value={{ watchlist, setWatchlist, page, setPage, numberOfPages, setNumberOfPages, isSignedIn, setIsSignedIn }}>{children}</globalContext.Provider>;
};

export default Context;
