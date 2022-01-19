import React ,{useEffect, useState} from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles (theme => ({
    cardButton:{
        '&:hover':{
           backgroundColor:'#356E44',
           color: 'white'
        }
    },
    main:{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(4, 2fr)',
        alignItems: 'center',
        justifyItems: 'center',
    },
    cardMain:{
        maxWidth: '300px',
        maxHeight: '320px',
        margin: '10px',
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


const Produts = () =>{

    const classes = useStyles();
    
    const [movieData, setMovieData] = useState([
        //the below is an fake api data which needs to be deleted when final disgn is ready and add real api from useEffect
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
            },
            {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
            35
            ],
            "id": 347158,
            "original_language": "en",
            "original_title": "Bikini Avengers",
            "overview": "When the Jade Empress steals the world's largest diamonds, super heroes Bikini Avenger and Thong Girl must stop her before she uses the gems to build a dangerous sci-fi weapon.",
            "popularity": 17.056,
            "poster_path": "/ehTYWuPKwl8sXPX0I6LnvJUDaVl.jpg",
            "release_date": "2015-02-24",
            "title": "Bikini Avengers",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 14
            },
            {
            "adult": false,
            "backdrop_path": "/gCzHEi6g8K0LIWlr6A38fmgtEfb.jpg",
            "genre_ids": [
            16,
            10751
            ],
            "id": 14613,
            "original_language": "en",
            "original_title": "Next Avengers: Heroes of Tomorrow",
            "overview": "The children of the Avengers hone their powers and go head to head with the very enemy responsible for their parents' demise.",
            "popularity": 27.636,
            "poster_path": "/4NL4vwuh6AlwgGoNNlhVp52DRfi.jpg",
            "release_date": "2008-09-02",
            "title": "Next Avengers: Heroes of Tomorrow",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 171
            },
            {
            "adult": false,
            "backdrop_path": "/sORO7a1cSghfWE5GD4cSJ0qTN8O.jpg",
            "genre_ids": [
            28,
            12,
            14
            ],
            "id": 521720,
            "original_language": "en",
            "original_title": "Avengers Grimm: Time Wars",
            "overview": "When Rumpelstiltskin tries to take over Earth once and for all, The Avengers Grimm must track him down through time in order to defeat him.",
            "popularity": 16.38,
            "poster_path": "/xfAcu74DRQXeM9XqFcE5MrSRzYP.jpg",
            "release_date": "2018-05-01",
            "title": "Avengers Grimm: Time Wars",
            "video": false,
            "vote_average": 5,
            "vote_count": 42
            },
            {
            "adult": false,
            "backdrop_path": "/6zXs4OyZM6U4reYvddsJWeByxMX.jpg",
            "genre_ids": [
            99
            ],
            "id": 448366,
            "original_language": "en",
            "original_title": "Building the Dream: Assembling the Avengers",
            "overview": "Witness Marvel's epic journey, from its comic book origins to its blockbuster film franchises, through seven exclusive featurettes. Get the inside story, with exclusive behind-the-scenes footage and cast interviews, and discover the history behind its legendary characters and films -- Iron Man, The Incredible Hulk, Iron Man 2, Thor, Captain America: The First Avenger, and Marvel's The Avengers! With over 90 minutes of original footage, this is your all-access pass to Marvel and Phase One of the Marvel Cinematic Universe!",
            "popularity": 18.614,
            "poster_path": "/coS6rIaucxDzq20kiJozTgQ0Nmk.jpg",
            "release_date": "2012-09-25",
            "title": "Building the Dream: Assembling the Avengers",
            "video": true,
            "vote_average": 8.6,
            "vote_count": 20
            },
            {
            "adult": false,
            "backdrop_path": "/tLYc6glAh12z437Om7ZZxg6CcKA.jpg",
            "genre_ids": [
            10751,
            16
            ],
            "id": 368304,
            "original_language": "en",
            "original_title": "LEGO Marvel Super Heroes: Avengers Reassembled!",
            "overview": "The Avengers are forced to “party” with Ultron when he seeks to disassemble the team by taking control of Iron Man’s armor and enact a nefarious scheme to take over the world.",
            "popularity": 16.883,
            "poster_path": "/xUBZNoY7idPfqKZepnDEv7Qc8GC.jpg",
            "release_date": "2015-11-16",
            "title": "LEGO Marvel Super Heroes: Avengers Reassembled!",
            "video": false,
            "vote_average": 6.2,
            "vote_count": 75
            },
            {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 448368,
            "original_language": "en",
            "original_title": "The Avengers: A Visual Journey",
            "overview": "Joss Whedon and others in interviews discussing the aims for this new franchise.",
            "popularity": 12.057,
            "poster_path": "/2kBT7KONKQTIhkMc2ZtPU11E8Ky.jpg",
            "release_date": "2012-09-25",
            "title": "The Avengers: A Visual Journey",
            "video": true,
            "vote_average": 8.2,
            "vote_count": 10
            },
            {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 865648,
            "original_language": "en",
            "original_title": "Avengers Endgame: Bonus Feature Documentary",
            "overview": "1) Remembering Stan Lee\r 2) Setting The Tone: Casting Robert Downey Jr.\r 3) A Man Out of Time: Creating Captain America\r 4) The Women of the MCU\r 5) Black Widow: Whatever It Takes\r 6) The Russo Brothers: Journey to Endgame",
            "popularity": 6.406,
            "poster_path": "/tfrSNWGEbl8gjoEaWR4NfgmFQHK.jpg",
            "release_date": "",
            "title": "Avengers Endgame: Bonus Feature Documentary",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
            },
            {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 866238,
            "original_language": "en",
            "original_title": "Avengers: Infinity War",
            "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            "popularity": 3.514,
            "poster_path": null,
            "release_date": "",
            "title": "Avengers: Infinity War",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
            },
            {
            "adult": false,
            "backdrop_path": "/7dxHsaSxrkowFFmg7gInn0l9sh2.jpg",
            "genre_ids": [
            35,
            14
            ],
            "id": 538153,
            "original_language": "en",
            "original_title": "Avengers of Justice: Farce Wars",
            "overview": "While trying to remain a good husband and father, Superbat and the Avengers of Justice come out of retirement to stop Dark Jokester and Lisp Luthor from freezing the planet.",
            "popularity": 5.109,
            "poster_path": "/yymsCwKPbJIF1xcl2ih8fl7OxAa.jpg",
            "release_date": "2018-07-20",
            "title": "Avengers of Justice: Farce Wars",
            "video": false,
            "vote_average": 4.6,
            "vote_count": 8
            },
            {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
            12
            ],
            "id": 432413,
            "original_language": "en",
            "original_title": "The Avengers",
            "overview": "The attractive Argentine Don Careless is an adventurer and an excellent swordsman. Don is in love with Maria Moreno, since he had to emerge her jewels and had thereby to kill a shark. Don tries to prevent the forced marriage of Mary with the ruthless revolutionary Colonel Luis Corral. An armed clash between Don and Luis seems inevitable.",
            "popularity": 1.825,
            "poster_path": null,
            "release_date": "1950-06-10",
            "title": "The Avengers",
            "video": false,
            "vote_average": 10,
            "vote_count": 1
            },
            {
            "adult": false,
            "backdrop_path": "/boX7D2wHtf01C7AzzPuVZAzc74x.jpg",
            "genre_ids": [
            35,
            878
            ],
            "id": 58906,
            "original_language": "en",
            "original_title": "Alien Avengers",
            "overview": "Charlie and Rhonda are a sweet and comfortable married couple on vacation with their lovely daughter Daphne. They find a rundown boarding house and its haggard owner, Joseph, an ex-con whose mother has just died and left him the house. He doesn't know why this cheerful couple would want to vacation in the worst part of Los Angeles, but he doesn't know they're vacationing from outer space, and their idea of fun is murdering lowlife out on the streets",
            "popularity": 1.273,
            "poster_path": "/Akd3Aqrr2q8PLKOCPOkOnB3AoJk.jpg",
            "release_date": "1996-08-03",
            "title": "Alien Avengers",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 4
            },
            {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
            28
            ],
            "id": 416101,
            "original_language": "en",
            "original_title": "Ninja Avengers",
            "overview": "Just like those Thomas Tang \"so-called\" Ninja films that came out on Imperial Video. This one has a tacked in plot of Richard Harrison trying to fight off European Ninjas in footage that doesn't even match the film! The whole film is basically a RED SUN rip-off (but this time the Japanese steal a statue) that has a DJANGO like character carrying a cross that contains a gattling gun.",
            "popularity": 1.201,
            "poster_path": "/acmrVRQXQKFGs6ExSVUuRys1yxv.jpg",
            "release_date": "1987-01-01",
            "title": "Ninja Avengers",
            "video": false,
            "vote_average": 5.7,
            "vote_count": 3
            }
    ]);

    const [ratingValue, setRatingValue] = useState()
    
//the below is an api which needs to be uncommented when final design is ready 
    // useEffect (()=> {
        // const getMovieList  = async () => {

        //     const url = 'http://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=Avengers';
    
        //     const response = await fetch (url);
        //             try {
        //                 const responseJson = await response.json();
        //                 const data = (responseJson.results);
        //                 setMovieData(data);
        //             } catch (err) {
        //                 console.error(err);
        //             }
            
        // };
    //  getMovieList();
    // }, []);


    return (
        <> 
            <div className={classes.main}> 
            {movieData.map((movie) =>{
                 return(
                    <Card className={classes.cardMain} key={movie.id}>
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
                                value = {ratingValue}
                                readOnly
                                // onChange = {(event, newRating) => {
                                //   setRatingValue(newRating);
                                // }}

                           />  
                       </CardContent>
                   </CardActionArea>
                   <CardActions >
                       <Button className = {classes.cardButton} >Watch</Button>
                       <Button className = {classes.cardButton}>Like</Button>
                       <Button className = {classes.cardButton}>Rent</Button>
                   </CardActions>
               </Card>
                 );
                   
            })}
           
            </div>
             
              
        </>
    )
};
export default Produts;
