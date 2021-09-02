import React from 'react';
import {Link} from 'react-router-dom';

const homeStyle = ({

    background_image:{
        backgroundImage: "url(" + "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"+")",
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

const signupstyle = ({

    signup_bg:{
        width: '60%',
        height: '70%',
        backgroundColor: 'white',
        position:'absolute',
        zIndex : '2',
        margin: '0',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px',

    },
    
});
const Signup = () => {
    return(
        <>
        <section>
            
            <div style={homeStyle.background_image} >
                        <div className="main_bg"
                style = {homeStyle.background_color}   >
            </div>

            <div style = {signupstyle.signup_bg}>
                <h1 >SignUpPage</h1>
            </div>
            </div>
            
        </section>
        </>
    )
};

export default Signup;