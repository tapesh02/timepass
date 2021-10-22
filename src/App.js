import React, {useState} from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Signup from './components/Signup/Signup.jsx';
import Signin from './components/Signin/Signin.jsx';
import Products from './components/Products/Products.jsx';
import Watchlist from './components/Products/Watchlist.jsx';
import Error from './components/Error/Error.jsx';


function App() {
  
  const[searchText, setSearchText] = useState("");

  const handleChange = (event) =>{
    if (searchText !== "") {
      setSearchText(event.target.value);
    } else if (searchText !== null){
      setSearchText(event.target.value);
    }  
  }
 

  return (
    <>
    <Navbar handleChange = {handleChange} searchText = {searchText}/>
    <Switch>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/products" render= { (props) => <Products {...props} searchText={searchText} /> }/>
    <Route exact path="/watchlist" component={Watchlist}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/signin" component={Signin}/>
    <Route component={Error}/>
    </Switch>

    </>
  );
}

export default App;
