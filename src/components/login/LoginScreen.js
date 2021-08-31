import React from 'react'
import { getCharacters } from '../../api'

export const LoginScreen = ({history}) => {

    const handleClick = (e) => {
        history.replace('/breakingbad')

    }

    // getCharacters()


    
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={handleClick}>
                Login
            </button>
        </div>
    )
}
