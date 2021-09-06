
import { fetchAllCharacters } from "../helper/fetchAllCharacters";


export const getCharactersById = async (char_id) => {
    const getId = await fetchAllCharacters();
    console.log(getId)
    // console.log(getId)
    return getId.find(character => character.char_id === char_id );
    
    
}