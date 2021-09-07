import { fetchAllCharacters } from "../helper/fetchAllCharacters";




export const getCharactersByCategory = async (category) => {

    
    const characters = await fetchAllCharacters();
    console.log(characters)
    
    const validCategory = ['Better Call Saul','Breaking Bad', 'Breaking Bad, Better Call Saul' ];

    if (!validCategory.includes(category)) {
        throw new Error (`Category ${category} is not correct`);
    }
    
    return characters.filter(character => character.category === category );
    
    
      
}