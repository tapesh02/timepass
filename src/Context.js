import { React, createContext, useState } from "react";

export const wList = createContext();

const Context = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [page, setPage] =  useState(1);
  const [numberOfPages, setNumberOfPages] = useState();

  return (
    <wList.Provider value={{ watchlist, setWatchlist, page, setPage, numberOfPages , setNumberOfPages}}>
      {children}
    </wList.Provider>
  );
};

export default Context;
