import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Signin from "./components/Signin/Signin.jsx";
import Signout from "./components/Signout/Signout.jsx";
import Movies from "./components/Movies/Movies.jsx";
import Watchlist from "./components/Movies/Watchlist.jsx";
import Error from "./components/Error/Error.jsx";
import TvShows from "./components/Movies/TvShows";

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/movies" component={Movies} />
                <Route exact path="/tvshows" component={TvShows} />
                <Route exact path="/watchlist" component={Watchlist} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signout" component={Signout} />
                <Route path="*" component={Error} />
            </Switch>
        </>
    );
};

export default App;
