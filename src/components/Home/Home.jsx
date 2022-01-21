import React from 'react';
import "./Home.css";


const homeStyle = ({


    header: {
        color: 'white',
        fontSize: '2rem',
        zIndex:'2',
        position: 'relative',
        textAlign: 'center',
        marginTop: '13%'
        
    },
    sub_header:{
        color: 'white',
        fontSize: '1em',
        fontWeight: 'bold',
        zIndex: '2',
        position: 'absolute',
        textJustify: 'center',
        margin: '0',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    background_image:{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"})`,
        backgroudPosition: 'center center',
        backgroundSize: 'cover', 
        backgroudRepeat: 'no-repeat',
        position: 'fixed',  
        minWidth: '100%',
        minHeight: '100%',
        marginTop: '-5px'
    },

    background_color:{
        backgroundColor: 'rgba(53, 110, 68, 0.6)',
        minWidth : '100%',
        minHeight : '100%',
        position:'fixed'
    }

});

const Home = () => {
    return(
        <>
        <section>
            
            <div style={homeStyle.background_image} >
                        <div className="main_bg"
                style = {homeStyle.background_color}   >
            </div>

            <div style = {homeStyle.header}>
                <h1 className = "header">Movie Masti Magic</h1>
            </div>
            <div style = {homeStyle.sub_header}>
                <p>There are dozens of genres you can pick from, including regular ones for romance, drama, documentary, kids, comedy, and horror films, as well as unique genres like Holiday Movies, Home & Garden, Preschool, and Sword & Sorcery.</p>
            </div>
            </div>
            
        </section>
        </>
    )
};

export default Home;