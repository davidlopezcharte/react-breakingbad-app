import { fetchAllCharacters } from '../../libs/axios/api/fetchAllCharacters';

export const getCharactersById = async (charId) => {
  const getId = await fetchAllCharacters();

  return getId.find((character) => character.char_id === charId);
};
