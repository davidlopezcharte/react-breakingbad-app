import { CharacterCard } from './CharacterCard'
import {useBreakingBad} from '../../hooks/useBreakingBad'





export const CharacterList =  (category) => {
    
    console.log(category)
  

    const {isLoading, characterList} = useBreakingBad(category)
    


   
    
    
    return (
        
    
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                (isLoading) ? 
                    
                    <div>
                     <h1>Is loading...</h1>
                    </div>
                
                 :characterList.map(character => (
                    
                    <CharacterCard 
                        key = {character.char_id}
                        {...character}
                    />
                ))
            }
        </div>
        
    )
}





// useEffect( () => {
        
//     const characters = async () => {
        
//         const getCharacter = await getCharacters()
       
//         setCharacter(getCharacter)
        

//     }

//     characters()

    
// }, [character])
