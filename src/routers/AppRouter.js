import React, { useContext, useEffect, useState } from "react";
import { DashBoardRoute } from "./DashBoardRoute";
import { AuthRouter } from "./AuthRouter";
import firebase from "firebase";
import { login } from "../actions/auth";
import { AuthContext } from "../auth/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";



import {
BrowserRouter as Router,
  Switch,
  Redirect,  
} from "react-router-dom";





export const AppRouter = () => {
  
  const { dispatch} = useContext(AuthContext);

  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  
  // let componentMounted = true
  // (user?.uid && componentMounted)
 
  useEffect(() => {
   

     

        firebase.auth().onAuthStateChanged( (user) => {
          
          
  
          if (user?.uid) {
            
            
            dispatch(login(user.uid, user.displayName)); 
            setIsLoggedIn(true);
            
          } else {
            setIsLoggedIn(false);
          }
  
          setCheking(false);
          
        })
      
        
    
        
        
        
      }, [dispatch]);

      

      



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
              
            



