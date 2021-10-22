import React, { useState } from 'react';
import {Grid, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const Watchlist = () => {

    console.log ()
    return (
    <>
          <Card className={'classes.cardMain'}  key={'movie.id'}>
                    <CardActionArea>
                        <CardMedia className = {'classes.cardImage'}>
                            <img style = {{width: '100%', height: '100%', objectFit: 'cover'}} 
                                src ={`https://image.tmdb.org/t/p/original${'movie.poster_path'}`} 
                                alt = "movie poster"/>
                        </CardMedia>
                        <CardContent className = {'classes.cardContent'}>
                            <Typography>  {'movie.original_title'} </Typography>
                            <Typography 
                                        className = {'classes.typography1'} 
                                        variant="body2" 
                                        component = "p"
                                > {'movie.release_date'} 
                                </Typography>
                            <Rating 
                                    className = {'classes.typography2'} 
                                    name = "ratings"
                                    value =  {'movie.vote_average/2'} 
                                    precision={0.5}
                                    readOnly                                
                            />  
                            
                        </CardContent>
                    </CardActionArea>
                    </Card>
   
    </>
    )
}

export default Watchlist;