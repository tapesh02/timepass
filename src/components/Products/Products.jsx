import React ,{useEffect, useState} from 'react';
import {Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Watchlist from '../Products/Watchlist.jsx';





const useStyles = makeStyles (theme => ({
    cardButton:{
        '&:hover':{
           backgroundColor:'#356E44',
           color: 'white'
        }
    },

    Main:{
        width: "100vw",
        height: "100vh",
        justifyContent: "flex-start",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start", 
        alignContent: "flex-start",
        columnGap: "20px",
        rowGap:"5px",
    },
    cardMain:{
        width: 'min-content',
        height: 'min-content',
        margin: '10px',
        '&:hover':{
            boxShadow: '5px 3px 5px white',
         }
    },

    cardImage:{
        height: '150px',
        marginLeft: '7px',
        marginRight: '7px',
        marginTop: '5px',
        objectFit: 'cover',
    },
    cardContent: {
        width: '250px',
        height: '50px',
        wordBreak: 'break-word',
        fontSize: '1rem',
        fontWeight: 'bolder',
    },
    typography1:{
        float: 'right',
       
    },
    typography2:{
        float: 'left',
    },
}));


const Produts = (props) =>{

    
    const classes = useStyles();
    
    const [movieData, setMovieData] = useState([
        // the below is an fake api data which needs to be deleted when final disgn is ready and add real api from useEffect
        {
            "adult": false,
            "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
            "genre_ids": [
            12,
            878,
            28
            ],
            "id": 299534,
            "original_language": "en",
            "original_title": "Avengers: Endgame",
            "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
            "popularity": 326.894,
            "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            "release_date": "2019-04-24",
            "title": "Avengers: Endgame",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 18957
            },
            {
            "adult": false,
            "backdrop_path": "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
            "genre_ids": [
            12,
            28,
            878
            ],
            "id": 299536,
            "original_language": "en",
            "original_title": "Avengers: Infinity War",
            "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            "popularity": 406.149,
            "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            "release_date": "2018-04-25",
            "title": "Avengers: Infinity War",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 22571
            },
            {
            "adult": false,
            "backdrop_path": "/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg",
            "genre_ids": [
            878,
            28,
            12
            ],
            "id": 24428,
            "original_language": "en",
            "original_title": "The Avengers",
            "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
            "popularity": 180.927,
            "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
            "release_date": "2012-04-25",
            "title": "The Avengers",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 25295
            },
            {
            "adult": false,
            "backdrop_path": "/xnqust9Li4oxfhXD5kcPi3UC8i4.jpg",
            "genre_ids": [
            28,
            12,
            878
            ],
            "id": 99861,
            "original_language": "en",
            "original_title": "Avengers: Age of Ultron",
            "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
            "popularity": 158.958,
            "poster_path": "/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
            "release_date": "2015-04-22",
            "title": "Avengers: Age of Ultron",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 18442
            },
            {
            "adult": false,
            "backdrop_path": "/tui9Z2QEoZSIPZMfpvPcNP9HIoA.jpg",
            "genre_ids": [
            28,
            14
            ],
            "id": 323660,
            "original_language": "en",
            "original_title": "Avengers Grimm",
            "overview": "When Rumpelstiltskin destroys the Magic Mirror and escapes to the modern world, the four princesses of \"Once Upon a Time\"-Cinderella, Sleeping Beauty, Snow White, and Rapunzel-are sucked through the portal too. Well-trained and endowed with magical powers, the four women must fight Rumpelstiltskin and his army of thralls before he enslaves everyone on Earth.",
            "popularity": 37.284,
            "poster_path": "/1SbBKCbnULACOqWKN7eLfTu1gVm.jpg",
            "release_date": "2015-03-17",
            "title": "Avengers Grimm",
            "video": false,
            "vote_average": 4.2,
            "vote_count": 83
            },
            {
            "adult": false,
            "backdrop_path": "/fryen9fnjlm0YibKTDNGzWNBOSo.jpg",
            "genre_ids": [
            53,
            878
            ],
            "id": 9320,
            "original_language": "en",
            "original_title": "The Avengers",
            "overview": "British Ministry agent John Steed, under direction from \"Mother\", investigates a diabolical plot by arch-villain Sir August de Wynter to rule the world with his weather control machine. Steed investigates the beautiful Doctor Mrs. Emma Peel, the only suspect, but simultaneously falls for her and joins forces with her to combat Sir August.",
            "popularity": 27.008,
            "poster_path": "/1p5thyQ4pCy876HpdvFARqJ62N9.jpg",
            "release_date": "1998-08-13",
            "title": "The Avengers",
            "video": false,
            "vote_average": 4.4,
            "vote_count": 506
            },
            {
            "adult": false,
            "backdrop_path": "/ldxi7dKtud2KrStUr8V9P65ixNr.jpg",
            "genre_ids": [
            12,
            16,
            28,
            878
            ],
            "id": 14611,
            "original_language": "en",
            "original_title": "Ultimate Avengers 2",
            "overview": "Mysterious Wakanda lies in the darkest heart of Africa, unknown to most of the world. An isolated land hidden behind closed borders, fiercely protected by its young king - the Black Panther. But when brutal alien invaders attack, the threat leaves the Black Panther with no option but to go against the sacred decrees of his people and ask for help from outsiders.",
            "popularity": 30.226,
            "poster_path": "/sMFyYZR9krqcQC99G6jnb10Zv4P.jpg",
            "release_date": "2006-08-08",
            "title": "Ultimate Avengers 2",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 211
            },
            {
            "adult": false,
            "backdrop_path": "/9tjIgkkbajG2zMI4Yk21hpttXv0.jpg",
            "genre_ids": [
            28,
            16,
            10751,
            12,
            878
            ],
            "id": 14609,
            "original_language": "en",
            "original_title": "Ultimate Avengers: The Movie",
            "overview": "When a nuclear missile was fired at Washington in 1945, Captain America managed to detonate it in the upper atmosphere. But then he fell miles into the icy depths of the North Atlantic, where he remained lost for over sixty years. But now, with the world facing the very same evil, Captain America must rise again as our last hope for survival.",
            "popularity": 26.926,
            "poster_path": "/iMCkGHVrYRdqKROPRPmVaJVSlg3.jpg",
            "release_date": "2006-02-21",
            "title": "Ultimate Avengers: The Movie",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 251
            }
            
     ]);
     
     const [watchlist, setWatchlist] = useState ([]);

     const filterData = ((val) => {

         const keyword = props.searchText;

         if (keyword === "" || keyword === undefined ) {
             return val
         } else if (val.original_title?.toLowerCase().includes(props.searchText?.toLowerCase())) {
             return val
         } 
      } );

    
    

//the below is an api which needs to be uncommented when final design is ready 
    useEffect (()=> {
        // const getMovieList  = async () => {

        //     const url = `http://api.themoviedb.org/3/search/movie?api_key=4a58ed5793dfdd5f2f1efc2069cdc112&query=${props.searchText}`;
    
        //     const response = await fetch (url);
        //             try {
        //                 const responseJson = await response.json();
        //                 const data = (responseJson.results);
        //                 setMovieData(data);
        //             } catch (err) {
        //                 console.error(err);
        //             }
            
        // };
     //getMovieList();
 }, [props.searchText]);


 const handleWatchlist = (movieData) => {
     const newWatchlist = [...watchlist , movieData]
 }

    return (
        <> 
            <Grid
            item
            xs
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ backgroundColor: "black", }}
            >
                <div  className ={classes.Main} > 
                {movieData.filter(filterData).map((movie) =>{
                    return(
                        <Card className={classes.cardMain}  key={movie.id}>
                    <CardActionArea>
                        <CardMedia className = {classes.cardImage}>
                            <img style = {{width: '100%', height: '100%', objectFit: 'cover'}} 
                                src ={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                                alt = "movie poster"/>
                        </CardMedia>
                        <CardContent className = {classes.cardContent}>
                            <Typography>  {movie.original_title} </Typography>
                            <Typography 
                                        className = {classes.typography1} 
                                        variant="body2" 
                                        component = "p"
                                > {movie.release_date} 
                                </Typography>
                            <Rating 
                                    className = {classes.typography2} 
                                    name = "ratings"
                                    value =  {movie.vote_average/2} 
                                    precision={0.5}
                                    readOnly                                
                            />  
                            
                        </CardContent>
                    </CardActionArea>
                    <CardActions style = {{justifyContent: 'space-evenly'}} >
                        <Button className = {classes.cardButton} size = "small">Watch</Button>
                        <Button className = {classes.cardButton} size = "small" >Share</Button>
                        <Button className = {classes.cardButton}size = "small" onClick = {handleWatchlist} ><Watchlist/></Button>
                    </CardActions>
                </Card>
                    );
                    
                })}
            
                </div>
            </Grid>
              
        </>
    )
};
export default Produts;