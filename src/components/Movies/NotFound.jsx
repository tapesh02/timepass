import React from 'react';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles (theme => ({

    notfoundimg: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${"https://images.unsplash.com/photo-1561722798-9a732d141027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    mainBg: {
        backgroundColor: 'transparent',
        width: '100vw',
        height: '91vh',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        
    },
    h1style: {
        fontSize: '2rem',
        fontWeight : 'bold',
        textTransform : 'capitalize',
        textAlign: 'center',
        color: 'black',

    },
})) ;

const NotFound = (props) => {

    const classes = useStyles();
    

    return (
        
        <>
        <section>
            <div className={classes.notfoundimg}>
                <div className={classes.mainBg}>
                    <h1 className = {classes.h1style}> Oppps.. ! No results found for {props.notfound}</h1>
                </div>
            </div>
        </section>
        </>
    ) 
};

export default NotFound;