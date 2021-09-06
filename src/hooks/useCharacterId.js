import { useEffect, useState } from "react"

import { getCharactersById } from "../selectors/getCharactersById"



export const useCharacterId = (char_id) => {

    const [isLoading, setIsLoading] = useState(true);
    const [getCharacterId, setGetCharacterId] = useState([]);


    
   

    useEffect(() => {

        // getCharactersByCategory()

      
        getCharactersById(char_id)
            .then( id => {
                setIsLoading(false);
                setGetCharacterId(id)
                
                
            });
        
    
            
        }, [char_id]); 


    return {
        isLoading,
        getCharacterId
        
    };

}