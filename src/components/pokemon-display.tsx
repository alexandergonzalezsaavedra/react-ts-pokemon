import type { Pokemon } from '../types/pokemon.interface';
import { GameState } from '../hooks/use-game-manager';
import Spiner from './spiner';

interface PokemonDisplayProps {
  pokemon: Pokemon | null;
  isLoading: boolean;
  gameState: GameState;
}

const PokemonDisplay = ({
  pokemon,
  isLoading,
  gameState,
}: PokemonDisplayProps) => {
  const showAnswer =
    gameState === GameState.Won || gameState === GameState.Lost;
  const image = pokemon?.image;
  const name = pokemon?.name;

  return (
    <div className='text-center mb-8'>
      <h1 className='font-pokemon text-5xl text-yellow-400 stroke-blue-600 tracking-widest mb-4'>
        {showAnswer ? name?.toUpperCase() : '¿Quién es ese Pokémon?'}
      </h1>
      <div className='relative h-48'>
        {isLoading ? (
          <Spiner />
        ) : (
          <>
            <img
              className={`mx-auto h-full transition-all duration-500 ease-in-out ${
                showAnswer ? 'opacity-100' : ''
              }`}
              src={image}
              style={{
                filter: showAnswer ? 'none' : 'brightness(0)',
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
