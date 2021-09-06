import React, { useContext, useEffect, useMemo, useState } from "react";
import { DashBoardRoute } from "./DashBoardRoute";
import { AuthRouter } from "./AuthRouter";

import {
BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import firebase from "firebase";
import { login } from "../actions/auth";
import { AuthContext } from "../auth/AuthContext";
import { Spinners } from "../components/ui/Spinners";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";




export const AppRouter = () => {
  
  const {dispatch} = useContext(AuthContext);

  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
 
  useEffect(() => {
    // let isMounted = true;

        
        firebase.auth().onAuthStateChanged( (user) => {

          if (user?.uid) {
            
            
            dispatch(login(user.uid, user.displayName)); 
            setIsLoggedIn(true);
            
          } else {
            setIsLoggedIn(false);
          }

          setCheking(false);
          
        })
        
        // if (isMounted)
        // return stateChange;
        
      }, [dispatch, setCheking]);

      console.log(cheking)

      



      if (cheking) {
        return (
          <div>
           <h1>Loading</h1>
          </div>
        )
      }
       
    
      return (

      
      <Router>
        
        <div>
          <Switch>
            
              <PublicRoute
                path="/auth" 
                component={AuthRouter}
                isLoggedIn={isLoggedIn}
              />
              
              <PrivateRoute
                path="/" 
                component={DashBoardRoute}
                isLoggedIn={isLoggedIn}/>
              
            <Redirect to='/auth/login'/>
          </Switch>
        </div>
      </Router>
    );
}
              
            



