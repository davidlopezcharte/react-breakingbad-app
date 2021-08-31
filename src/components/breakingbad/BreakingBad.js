import React from 'react'
import { CharacterList } from '../characters/CharacterList'


export const BreakingBad = () => {
    return (
        <div className="container mt-5">
            <h1>Breaking Bad</h1>
            <hr/>
            <CharacterList category={"Breaking Bad"}/>
        </div>
    )
}
