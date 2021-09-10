import { useEffect, useState } from 'react';
import { getCharactersByCategory } from '../selectors/getCharactersByCategory';

export const useBreakingBad = ({ category }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getCharactersByCategory(category).then((characters) => {
      setCharacterList(characters);
      setIsLoading(false);
    });
  }, [category]);

  return {
    isLoading,
    characterList,
  };
};
