import React, { useEffect, useState }  from 'react';
import {Modal, Button, makeStyles, IconButton} from '@material-ui/core';
import "./Movies.css"
import YouTubeIcon from '@material-ui/icons/YouTube';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import ReactPlayer from 'react-player/lazy'

import Stack from '@mui/material/Stack';

const useStyles = makeStyles (theme => ({
  cardButton:{
    float: 'right',
    color: "white",
      '&:hover':{
         backgroundColor:'#356E44',
         color: 'white',
      }
  },
}));

const VideoModal = ({
  watchVideo, 
  handleWatchClose, 
   //code even simpler by destructuring the object or props
  movieVideoId : {
    id ,
    title,
    backdrop_path,
    overview,
    poster_path,
    release_date,
  }
}) => {
  const classes = useStyles()

  const [openPlayer, setOpenPlayer] = useState(false)
  const [videos, setVideos] = useState()

  useEffect (() => {
    const getVideoData =  async ( ) => {
  
        const videoAPI = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4a58ed5793dfdd5f2f1efc2069cdc112&language=en-US`
      
        const response = await fetch (  id !== undefined ? videoAPI : null )
          try{
            const responseJson = await response.json()
            const data = (responseJson.results)
            setVideos(data[0]?.key)
            console.log(data[0]?.key);
          } catch (err){
            console.log(err);
          }
    }
        getVideoData() 
    }, [id])
 
  return (  
  <> 

         <Modal
               open={watchVideo}
               onClose={handleWatchClose}
               aria-labelledby="simple-modal-title"
               aria-describedby="simple-modal-description"
           >
             <div>
               { !openPlayer?  <Button className = {classes.cardButton} size = "small" onClick = { () => {handleWatchClose() ; setOpenPlayer(false) }}>Close</Button> : null}
             <div className='modal'>
               <div className='modal_content'>
              
                      <div  className='modal_img'><img src =  {`https://image.tmdb.org/t/p/original/${poster_path}`} alt = "img"/>
                      <div  className='modal_header'>
                      <h4> {title}</h4>
                       <h5> 
                       {
                             release_date ? release_date.substring(0,4) : "..." 
                        }
                         </h5>
                      <h6> <span>117</span> Action, Drama, Crime</h6>
                      </div>
                      
                      </div>
                        <div className='inner_modal'>
                              <p>{overview}</p>
                              <IconButton >
                                <YouTubeIcon />
                              </IconButton>
                               <IconButton >
                                  <ShareIcon />
                               </IconButton>
                                <IconButton >
                                  <FavoriteIcon />
                               </IconButton>
                        </div>
                       
               </div>
                  
                  <div className='outer_modal'>
                    <div className="avatar_img">
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  </Stack>
                    </div>
                    <div className="outer_icon">
                    <IconButton   className='play_icon'>
                      <YouTubeIcon style = {{fontSize: '4rem'}} onClick ={() => setOpenPlayer(!openPlayer)}/>
                    </IconButton>
                    </div>
                  </div>
                  <div className='poster_bg' style={{background: `linear-gradient(to right, #ffffff, #e4e5e6, #cacccd, #afb3b4, #969b9b), url(${`https://image.tmdb.org/t/p/original/${backdrop_path}`})  no-repeat  center center` , backgroundSize: 'cover' }}  >
                  </div>
             </div>
             </div>

         </Modal>

         <Modal
            open={openPlayer? setOpenPlayer : null}
            onClose={openPlayer? !openPlayer : null}
            aria-labelledby="simple-modal-title2"
            aria-describedby="simple-modal-description2"
         >
           <div className='modal2'>
           <Button className = {classes.cardButton} size = "small" onClick = { () => {setOpenPlayer(false) }}>Close</Button>

                   {
                      openPlayer?   <ReactPlayer 
                      url = {`https://www.youtube.com/watch?v=${videos}`}
                      width="100%"
                      height = "100%"
                      className = "react_player"
                      /> : null
                    }
           </div>
                 
         </Modal>
  </>
  )
};

export default VideoModal;
