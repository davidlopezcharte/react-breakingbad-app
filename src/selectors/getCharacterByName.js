import { fetchAllCharacters } from "../helper/fetchAllCharacters";

export const getCharacterByName = async (name= '') => {
    const characters = await fetchAllCharacters();

    if (name === '') {
        return [];
    }
    name = name.toLocaleLowerCase();
    return characters.filter(character => character.name.toLocaleLowerCase().includes(name));


    
}