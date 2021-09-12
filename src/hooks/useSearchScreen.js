import { useEffect, useState } from 'react';
import { getCharacterByName } from '../context/selectors/getCharacterByName';

export const useSearchScreen = (name) => {
  const [isLoading, setIsLoading] = useState(true);
  const [characterScreen, setCharacterScreen] = useState([]);

  useEffect(() => {
    getCharacterByName(name).then((characters) => {
      setIsLoading(false);
      setCharacterScreen(characters);
    });
  }, [name]);

  return {
    isLoading,
    characterScreen,
  };
};
