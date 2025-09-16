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

  console.log(name);

  return (
    <div className='card'>
      <div className='card-header'>
        <h1 className='text-center'>
          {showAnswer ? name?.toUpperCase() : '¿Quién es ese Pokémon?'}
        </h1>
      </div>
      <div className='card-body'>
        {isLoading ? (
          <Spiner />
        ) : (
          <img
            className='img-fluid mx-auto d-block'
            src={image}
            alt=''
            style={{
              maxHeight: '200px',
              filter: showAnswer ? 'none' : 'brightness(0)',
              transition: 'filter 0.3s ease',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
