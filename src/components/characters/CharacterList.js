import { CharacterCard } from './CharacterCard'
import {useBreakingBad} from '../../hooks/useBreakingBad'
import "animate.css"
import { Spinners } from '../ui/Spinners';








export const CharacterList =  (category) => {
    
    
    
    const {isLoading, characterList} = useBreakingBad(category);
    
   
    

    
   
    
    
    return (
        
    
        <div className="card-group">
            
            
            {
                (isLoading) ? 
                
                    
                    <Spinners/>
                    
                 
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





