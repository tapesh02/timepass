import React, { useEffect, useState , useContext} from 'react';
import {Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import NotFound from './NotFound';
import { wList } from '../../Context.js';
import PageNav from './PageNav';





const useStyles = makeStyles (theme => ({
  cardButton:{
      '&:hover':{
         backgroundColor:'#356E44',
         color: 'white',
      }
  },

  Main:{
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center", 
      alignContent: "center",
      justifyContent: "flex-start;",
      columnGap: "2.5rem",
      rowGap:"5px",
  },
  cardMain:{
      width: '200px',
      height: '260px',
      margin: '10px',
      '&:hover':{
          boxShadow: '5px 3px 5px gray',
       }
  },
  cardContent: {
      width: '95%',
      height: '50px',
      padding: '5px',
      '& .MuiTypography-body1': {
          fontSize: '13px',
          wordBreak: 'break-word',
          fontWeight: 'bolder',
      },

  },
  movieTitle:{
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      height: '1.5rem',
      marginBottom: '5px',

  },
  typography1:{
      float: 'right',
      '&.MuiTypography-body2':{
          fontSize: '13px',
      },  
  },
  typography2:{
      float: 'left',
      '&.MuiRating-root':{
          color: 'red',
          fontSize: '13px',
      },
  },
  filtermain:{
      color: 'white',
      width: "98%",
      margin: "auto",
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      border: '1px solid green',
      borderRadius: '5px',
  },
}));
const TvShows = (props) => {

  const classes = useStyles();
  const {watchlist, setWatchlist, page, setPage, numberOfPages , setNumberOfPages} = useContext(wList);
  const [tvData, setTvData] = useState([])
  
  const tfilterData = ((val) => {
    if (props.searchText === "" ) {
        return val
    } 
    else if (val.name?.toLowerCase().includes(props.searchText?.toLowerCase())) {
        return val
    } 
    
} );

  const addToWatchlist = (tvData) => {
    const addItem = [...watchlist, tvData]
    setWatchlist(addItem);   
}
  
  useEffect(() => {
    const getTvshowList = async () => {
     const tvshowTrendingAPI =  `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
     const searchtvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${props.searchText}&page=${page}`

     const tresponse = await fetch (props.searchText ===""? tvshowTrendingAPI : searchtvUrl);
    try{

      const tresponseJson = await tresponse.json();
      const tdata = (tresponseJson.results);
      const tpages = (tresponseJson.total_pages)
      setTvData (tdata);
      setNumberOfPages(tpages);

    }catch(error){
      console.log(error);
    }
  }
  getTvshowList();
  // eslint-disable-next-line
}, [props.searchText, page]);


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
      <div className={classes.filtermain}>
          <div className={classes.filterinner1}>
              <Button className={classes.frecentlyadded}>Recently Added </Button>
              <Button className={classes.fmostpopular}>Most Popular</Button>
          </div>
          <div className={classes.filterinner2}>
              <Button className={classes.fyear}>Year</Button>
              <Button className={classes.fgenre}>Genre</Button>
              <Button className={classes.flanguage}>Language</Button>
              <Button className={classes.fsortby}>Sort by</Button>
          </div>
      </div>
     
      <div  className ={classes.Main} > 
      { tvData.length === 0 ? <NotFound notfound = {props.searchText}/> : tvData.filter(tfilterData).map((tvshows) =>{
          return(
              <Card className={classes.cardMain}  key={tvshows.id}>
          <CardActionArea>
              <CardMedia 
                height="150px"
                component="img"
                image ={`https://image.tmdb.org/t/p/original/${tvshows.poster_path}`} 
                alt = "tv poster"
                title = {tvshows.name}
                />
              <CardContent className = {classes.cardContent}>
                  <Typography className = {classes.movieTitle}>  {tvshows.name} </Typography>
                  <Typography 
                              className = {classes.typography1} 
                              variant="body2" 
                              component = "p"
                      > {tvshows.first_air_date} 
                      </Typography>
                  <Rating 
                          className = {classes.typography2} 
                          name = "ratings"
                          value =  {tvshows.vote_average/2} 
                          precision={0.5}
                          readOnly                                
                  />                             
              </CardContent>
          </CardActionArea>
          <CardActions style = {{justifyContent: 'space-evenly'}} >
              <Button className = {classes.cardButton} size = "small">Watch</Button>
              <Button className = {classes.cardButton} size = "small" >Share</Button>
              <Button className = {classes.cardButton}size = "small" onClick = {   ()=> addToWatchlist(tvshows) }> Add </Button> 
          </CardActions>                   
      </Card>
          );                    
      })}            
      </div>
  </Grid> 
  <PageNav  setPage = {setPage}  numberOfPages = {numberOfPages}/>
</>    )
};

export default TvShows;
