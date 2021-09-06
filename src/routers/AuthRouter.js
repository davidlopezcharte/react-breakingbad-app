import React from 'react'
import { LoginScreen } from '../components/auth/login/LoginScreen';
import { RegisterScreen } from '../components/auth/register/RegisterScreen';

import {
   
    Switch,
    Route,
    Redirect, 
  } from "react-router-dom";

export const AuthRouter = () => {
    return (
        <div className="auth__main">
             <Switch>
                
             <Route exact path="/auth/login" component={LoginScreen}/>
             <Route exact path="/auth/register" component={RegisterScreen}/>
            
                
                <Redirect to="/auth/login"/>
        
            </Switch>
        </div>
    )
}
