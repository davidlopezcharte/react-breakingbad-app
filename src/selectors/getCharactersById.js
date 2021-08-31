import { getCharacters } from "../api";

const characters = getCharacters();

export const getCharactersById = (id) => {

    return characters.find(character => character.id === id );
    
}