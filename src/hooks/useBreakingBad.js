import { useEffect, useState } from "react"
import { fetchAllCharacters } from "../helper/fetchAllCharacters"
import { getCharactersByCategory } from "../selectors/getCharactersByCategory"



export const useBreakingBad = ({category}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [characterList, setCharacterList] = useState([])


    

    useEffect(() => {

        // getCharactersByCategory()

      

        getCharactersByCategory(category)
            .then( characters => {
                setIsLoading(false);
                setCharacterList(characters)
            })
        
    
            
        }, [])  


    return {
        isLoading,
        characterList
        
    }

}