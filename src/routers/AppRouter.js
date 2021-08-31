import React from "react";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoute } from "./DashBoardRoute";

import {
BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";





export const AppRouter = () => {
    return (
      <Router>
        
        <div>
          <Switch>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/" component={DashBoardRoute}/>
            
            
          
          </Switch>
        </div>
      </Router>
    );
}


