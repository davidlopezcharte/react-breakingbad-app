import { fetchAllCharacters } from "../helper/fetchAllCharacters";




export const getCharactersByCategory = async (category) => {

    
    const characters = await fetchAllCharacters();
    const validCategory = ['Breaking Bad','Breaking Bad, Better Call Saul' , 'Better Call Saul' ];

    if (!validCategory.includes(category)) {
        throw new Error (`Category ${category} is not correct`);
    }
    
    return characters.filter(character => character.category === category );
    
    
      // return characters
}