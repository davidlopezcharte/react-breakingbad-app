import React from 'react'
import { BreakingBad } from "../components/breakingbad/BreakingBad";
import { BetterCallSaul } from "../components/betterCallSaul/BetterCallSaul";
import { NavBarUi } from "../components/ui/NavBarUi";
import { CharacterScreen } from "../components/characters/CharacterScreen";
import { SearchScreen } from '../components/search/SearchScreen';
import { ProfileScreen } from '../components/profile/ProfileScreen';
  
import {
   
    Switch,
    Route,
    Redirect, 
  } from "react-router-dom";



  export const DashBoardRoute = () => {
      return (
        <div>
            <NavBarUi/>
            <Switch>
                
                <Route exact path="/breakingbad" component={BreakingBad}/>
                <Route exact path="/bettercallsaul" component={BetterCallSaul}/>
                <Route exact path="/character/:characterId" component={CharacterScreen}/>
                <Route exact path="/search" component={SearchScreen}/>
                <Route exact path="/profile" component={ProfileScreen}/>

               
                
                <Redirect to="/breakingbad"/>
        
            </Switch>
      </div>
      )
  }
  