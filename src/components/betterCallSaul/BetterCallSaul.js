import React from 'react'
import { CharacterList } from '../characters/CharacterList'


// const {isLoading} = getCharactersById()

export const BetterCallSaul = () => {
    return (
        <div className="container mt-5">
            <h1>Better Call Saul</h1>
            <hr/>
            
            <CharacterList category="Breaking Bad, Better Call Saul"/>
        </div>
    )
}
