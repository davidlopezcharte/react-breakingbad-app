import React from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { useCharacterId } from '../../hooks/useCharacterId';
import { Spinners } from '../ui/Spinners';
import "animate.css"



export const CharacterScreen =  () => {
    const history = useHistory()
    const {characterId} = useParams();
    
    const numId = parseFloat(characterId)
    
    
    const {isLoading, getCharacterId} = useCharacterId(numId)
    // console.log(characterId)
    console.log(getCharacterId)

    if (!getCharacterId) {
        return <Redirect to="/"/>
    }
    
    const {
        img,
        name,
        birthday,
        occupation,
        nickname,
        portrayed

    } = getCharacterId;

    const handleClick = () => {
        history.goBack()
    }

    
   
    
    // const character = await getCharactersById(characterId)
    // const {isLoading, characterId} = useCharacterId();
    // console.log(characterId)

    return (

        
        <div className="container mt-5">

            {
                (isLoading) ? 
                 
                    <Spinners/>
                :
                    <div>
                        <h1>Character Screen</h1>
                        <hr/>

                        
                        
                        <div className="col-10 " style={{maxWidth: 540}}>
                            <div className="row g-0">
                            <div className="col-md-4">
                                <img src={img} className="img-fluid rounded-start animate__animated animate__fadeInLeft" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><b>{name}</b></h5>
                                <p className="card-text"><b>Occupation:</b> {occupation}</p>
                                <p className="card-text"> <b>NickName: </b>{nickname}</p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={handleClick}>
                                    Return
                                </button>
                            </div>
                        </div>
                        </div>
                        </div>          
                     </div>
            }
            
            
        </div>
    )
}
