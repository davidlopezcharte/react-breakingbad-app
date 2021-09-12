import { useEffect, useState } from 'react';

import { getCharactersById } from '../context/selectors/getCharactersById';

export const useCharacterId = (charId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [getCharacterId, setGetCharacterId] = useState([]);

  useEffect(() => {
    getCharactersById(charId).then((id) => {
      setIsLoading(false);
      setGetCharacterId(id);
    });
  }, [charId]);

  return {
    isLoading,
    getCharacterId,
  };
};
