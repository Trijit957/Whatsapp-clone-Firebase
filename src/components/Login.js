import React from 'react';
import { Button } from '@material-ui/core';
import '../styles/Login.css';
import db, { auth, provider } from '../firebase/firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


const Login = () => {
    const [{user}, dispatch] = useStateValue();

    const signIN = () => {
       auth.signInWithPopup(provider).then(result => {
           console.log(result);
           dispatch({
               type: actionTypes.SET_USER,
               user: result.user
           });
       }).catch(err => alert(err.message)); 
       
    }
    return (
        <div className="login">
            <div className="login__container">
              <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                   alt="logo"
                   height="50"
                   width="50"
              />

              <div className="login__text">
                 <h1>Sign In to Whatsapp</h1>
              </div>

              <Button type="submit" onClick={signIN}>
                 Sign In with Google
              </Button>
            </div>
        </div>
    )
}

export default Login;
