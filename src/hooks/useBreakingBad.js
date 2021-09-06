import { useEffect, useState } from "react"
import { getCharactersByCategory } from "../selectors/getCharactersByCategory"



export const useBreakingBad = ({category}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [characterList, setCharacterList] = useState([])


    // const character = useMemo(() => getCharactersByCategory(category), [category])
    // const character = getCharactersByCategory(category)
    useEffect(() => {

        // getCharactersByCategory()

      

        getCharactersByCategory(category)
            .then( characters => {
                setIsLoading(false);
                setCharacterList(characters)
            })
        
    
            
        }, [category])  


    return {
        isLoading,
        characterList
        
    }

}