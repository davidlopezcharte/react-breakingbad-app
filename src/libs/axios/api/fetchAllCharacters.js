import { breakingbadApi } from '../config/breakingbadClient';

export const fetchAllCharacters = async () => {
  const { data } = await breakingbadApi.get('/characters');

  return data;
};
