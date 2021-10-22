import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles (theme => ({

    h1style: {
        fontSize: '2rem',
        fontWeight : 'bold',
        textTransform : 'capitalize',
        textAlign: 'center',
        color: 'red',
    },
    
    mainBg: {
        backgroundColor: 'white',
        width: '100vw',
        height: '91vh',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
    }
})) ;
const NotFound = (props) => {

    const classes = useStyles();
    

    return (
        
        <>
        <section>
        <div className={classes.mainBg}>

            <h1 className = {classes.h1style}> No result found for:  {props.notfound}</h1>
        </div>
        </section>
        </>
    ) 
};

export default NotFound;