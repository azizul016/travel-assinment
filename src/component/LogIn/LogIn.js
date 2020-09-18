import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleGoogleSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, handleGitHubSignIn, handleFbSignIn } from './loginManager';
import './Login.css';
import fbIcon from '../../Image/Icon/fb.png';
import googleIcon from '../../Image/Icon/google.png';



function LogIn() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false,
  })

  initializeLoginFramework()

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
 
  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
      handleResponse(res, true);
    })
  }

  const fbSignIn = () => {
    handleFbSignIn()
    .then(res => {
      handleResponse(res, true);
    })
  }


  const handleResponse = (res, redirect) => {
      setUser(res);
      setLoggedInUser(res);
      if (redirect) {
        history.replace(from);
      }
  }

  //Handle Submit
  const handleSubmit = (e) => {
   if(newUser && user.email && user.password){
    createUserWithEmailAndPassword(user.name, user.email, user.password)
    .then(res => {
      handleResponse(res, true);
    })
   }

   if(!newUser && user.email && user.password){
    signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
      handleResponse(res, true);
    })
   }
   e.preventDefault();
  }
 

  //Handle Change
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPassWordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d+/.test(e.target.value);
      isFieldValid = passwordHasNumber && isPassWordValid
    }
    if (isFieldValid) {
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }


    return (
        <div className="login">
           
            {
                user.isSignedIn && <p>welcome {user.name}</p>
            }
            <div style={{textAlign:'center', marginLeft: '300px'}}>
            <form style={{width:'600px'}} onSubmit={handleSubmit}>
                <input onChange={()=> setNewUser(!newUser)} type="checkbox" name="newUser" id=""/>
                <label htmlFor="newUser"><h2>Register</h2></label>
                <br/>
                <h2>{newUser ? 'Create an account' : 'Login'}</h2>
                <br/>
                {newUser && <input className="form-control" type="text" name="name" onBlur={handleBlur} placeholder="Enter Your First Name" required/>}
                <br/>
                {newUser && <input className="form-control" type="text" name="name" onBlur={handleBlur} placeholder="Enter Your Last Name" required/>}
                <br/>
                <input type="text" className="form-control" name="email" onBlur={handleBlur} required placeholder="Your Email Address"/>
                <br/>
                <input type="password" className="form-control" name="password" onBlur={handleBlur} required placeholder="Your Password" id=""/>
                {newUser && <button className="btn btn-warning">Create an account</button>}
               <div className="font-bottom">
                    <div>
                    <input type="checkbox" name="newUser" id=""/>
                    <label htmlFor="newUser"><p><small style={{color: 'black'}}>Remember Me</small></p></label>
                    </div>
                    <p className="text-warning">Forget password</p>
               </div>
                <input type="submit" className="form-control bg-warning" value={!newUser && "Login"}/>
                <div className="font-bottom">
                    <p>Don't have an account?</p>
                    <input onChange={()=> setNewUser(!newUser)} type="checkbox" name="newUser" id=""/>
                <label htmlFor="newUser"><p>Create an account</p></label>
                </div>
            </form>
            </div>
            <p style={{color: 'red'}}>{user.error}</p>
            {
                user.success && <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>
            }
            <div className="duel-style">
                <img style={{width:'25px'}} src={fbIcon} alt=""/>
                <button onClick={fbSignIn}>Continue with Facebook</button>
            </div>
            <div className="duel-style">
                <img style={{width:'25px'}} src={googleIcon} alt=""/>
                {
                    <button onClick={googleSignIn}>Continue with Google</button>
                }
            </div>
        </div>
    );
};

export default LogIn;