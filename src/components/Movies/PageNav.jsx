import React from 'react'
import  Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles (theme => ({
      stylepages:{
            width: "100% !important",
            alignContent: "center",
            justifyContent: "center", 
            display: "flex",
            
      },
}));



const PageNav = ({setPage, page, numberOfPages = 10}) => {

      const classes = useStyle();
      const handlePageChange = (page) => {
            setPage (page);
            window.scrollTo ({
                  top: 0,
                  behavior: "smooth"
            })
           
      };

      return (
            <div>
             <Pagination  
             count = {numberOfPages} 
             page={parseInt(page, 10)}
             onClick = {(event) =>handlePageChange(event.target.textContent) }
             color = "primary"
             className = {classes.stylepages}
             hideNextButton
             hidePrevButton
             />
            </div>
      )
}

export default PageNav
