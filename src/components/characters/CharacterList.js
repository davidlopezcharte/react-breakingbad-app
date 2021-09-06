import { CharacterCard } from './CharacterCard'
import {useBreakingBad} from '../../hooks/useBreakingBad'
import "animate.css"








export const CharacterList =  (category) => {
    
    
    
    const {isLoading, characterList} = useBreakingBad(category)
    
    // const { characterList} = useMemo(() => GetBreakingBad(category), [category])
    


   
    
    
    return (
        
    
        <div className="row row-cols-1 row-cols-md-3 g-4  ">

            {
                characterList.map(character => (
                        
                    <CharacterCard 
                        key = {character.char_id}
                        {...character}
                    />
                ))
            }

            
            
            {/* {
                (isLoading) ? 
                
                    
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    
                 
                    :characterList.map(character => (
                        
                        <CharacterCard 
                            key = {character.char_id}
                            {...character}
                        />
                    ))
                 
            } */}
        </div>
        
    )
}





