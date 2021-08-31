import React from 'react'
import { CharacterList } from '../characters/CharacterList'

export const BetterCallSaul = () => {
    return (
        <div className="container mt-5">
            <h1>Better Call Saul Screen</h1>
            <hr/>
            <CharacterList category={'Better Call Saul'}/>
        </div>
    )
}
