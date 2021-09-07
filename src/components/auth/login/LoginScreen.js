import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../../actions/auth'
import { AuthContext } from '../../../auth/AuthContext'
import { useForm } from '../../../hooks/useForm'
import {firebase, googleAuthProvider} from '../../../firebase/firebase-config'
import { useUiError } from '../../../hooks/useUiError'
import Swal from 'sweetalert2'




export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext);
    
    const {removeError, isLoading, startLoading, finishLoading} = useUiError();
    
    
    
    
    
    const [formValue, handleInputChange] = useForm({
        email:'',
        password: ''
    })
    
    const {email, password} = formValue;
    
    
    
    
    
    
    
    const [checking, setChecking] = useState(false)
    
    const handleLogin = async (e) => {
        e.preventDefault();
        // let isMounted = true;
       
        startLoading();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            
            setChecking(true)
                
                dispatch(login(user.uid, user.displayName))
                finishLoading()
            })
            .catch(({message}) => {
                Swal.fire({
                    title: 'Error!',
                    text: message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                finishLoading();
                setChecking(false)
            })
            

           

            
            
    
            removeError();
           
           
            
            
            
        }
        console.log(checking)
    
        
       

    
    
    
    const handleGoogleLogin = () => {
        
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(

                    login(user.uid, user.displayName)
                )
            })
    }
    
    
    return (
        <>
            <div className="">
                <div className="auth__box-container">

                    <h3 className="auth__title">Login</h3>

                    
                    
                    {/* {
                        (msgError.messageError) &&

                        <div className="alert alert-danger" role="alert">
                                {msgError.messageError}
                        </div>
                    } */}

                    <form onSubmit={handleLogin}>
                        <input
                            type= "text"
                            placeholder="Email"
                            name="email"
                            className="auth__input"
                            autoComplete="off"
                            value={email}
                            onChange={handleInputChange}
                            
                        />
                        <input
                            type= "password"
                            placeholder="Password"
                            name="password"
                            className="auth__input"
                            value={password}
                            onChange={handleInputChange}
    
                        />

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={isLoading.loading}
                            >
                                Login
                        </button>
                                


                        <div className="auth__social-networks">
                            <p className="">Login with social networks</p>
                                <div 
                                    className="google-btn"
                                    onClick={handleGoogleLogin}
                                >
                                    <div className="google-icon-wrapper">
                                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                    </div>
                                    <p className="btn-text">
                                        <b>Sign in with google</b>
                                    </p>
                            </div>
                        </div>

                        <Link 
                            to="/auth/register"
                            className="link">
                            Create new account
                        </Link>
                        
                    </form>

                </div>
            </div>
        </>
        )
    }
    
    // <div className="container mt-5">
    //     <h1>Login</h1>
    //     <hr/>
    //     <button 
    //         className="btn btn-primary"
    //         onClick={handleClick}>
    //         Login
    //     </button>
    // </div>