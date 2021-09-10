import { fetchAllCharacters } from '../helper/fetchAllCharacters';

export const getCharacterByName = async (name) => {
  const chars = await fetchAllCharacters();

  if (name === '') {
    return [];
  }

  return chars.filter((char) =>
    char.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
};
