import React from 'react'
import { BreakingBad } from "../components/breakingbad/BreakingBad";
import { BetterCallSaul } from "../components/betterCallSaul/BetterCallSaul";
import { NavBarUi } from "../components/ui/NavBarUi";
import { CharacterScreen } from "../components/characters/CharacterScreen";
  
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
                <Redirect to="/breakingbad"/>
        
            </Switch>
      </div>
      )
  }
  