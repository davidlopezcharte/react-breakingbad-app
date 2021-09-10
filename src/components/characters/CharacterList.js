import { CharacterCard } from './CharacterCard';
import { useBreakingBad } from '../../hooks/useBreakingBad';
import { Spinners } from '../ui/Spinners';
import 'animate.css';

export const CharacterList = (category) => {
  const { isLoading, characterList } = useBreakingBad(category);

  return (
    <div className="card-group">
      {isLoading ? (
        <Spinners />
      ) : (
        characterList.map((character) => (
          <CharacterCard key={character.char_id} {...character} />
        ))
      )}
    </div>
  );
};
