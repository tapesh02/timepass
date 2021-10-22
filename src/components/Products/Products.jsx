import React ,{useEffect, useState} from 'react';
import {Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import NotFound from '../Products/NotFound.jsx';







const useStyles = makeStyles (theme => ({
    cardButton:{
        '&:hover':{
           backgroundColor:'#356E44',
           color: 'white',
        }
    },

    Main:{
        width: "100vw",
        justifyContent: " flex-start",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "stretch", 
        alignContent: " flex-start",
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
    
    const [movieData, setMovieData] = useState([]);

     const [watchlist, setWatchlist] = useState ([]);
     
     
     const filterData = ((val) => {
         const keyword = props.searchText;
         if (keyword === "" ) {
             return val
            } 
            else if (val.original_title?.toLowerCase().includes(props.searchText?.toLowerCase())) {
                return val
            } 
            
        } );
        
        //the below is an api which needs to be uncommented when final design is ready 
        useEffect (()=> {
            const getMovieList  = async () => {
                
                const trendingUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key=4a58ed5793dfdd5f2f1efc2069cdc112';
                
                const searchUrl = `http://api.themoviedb.org/3/search/movie?api_key=4a58ed5793dfdd5f2f1efc2069cdc112&query=${props.searchText}`;
                
                const response = await fetch (props.searchText ===""? trendingUrl : searchUrl);
                try {
                    const responseJson = await response.json();
                    const data = (responseJson.results);
                    setMovieData(data);
                    console.log(data)
                } catch (err) {
                    console.error(err);
                }
                
            };
            getMovieList();     
            
        }, [props.searchText]);
        
        
        const handleWatchlist = (movieData) => {
            const newWatchlist = [...watchlist , movieData];
            setWatchlist (newWatchlist);
        }
        const noResultText = (props.searchText);
        
        return (
            <> 
            <Grid
            item
            xs
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            style={{ backgroundColor: "black", width: "100%", height: "100%"}}
            >
                <div  className ={classes.Main} > { movieData.length === 0 ? <NotFound notfound = {noResultText} /> 
                    : movieData.filter(filterData).map((movie) =>{
                    return(
                        <Card className={classes.cardMain}  key={movie.id}>
                    <CardActionArea>
                        <CardMedia className = {classes.cardImage}>
                            <img style = {{width: '100%', height: '100%', objectFit: 'cover'}} 
                                src ={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
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
                        <Button className = {classes.cardButton}size = "small" onClick = { () => handleWatchlist(movie) }> Add </Button> 
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