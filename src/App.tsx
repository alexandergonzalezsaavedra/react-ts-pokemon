//import ReactConfetti from 'react-confetti';
import PokemonDisplay from './components/pokemon-display';
import PokemonForm from './components/pokemon-form';
import PokemonResult from './components/pokemon-result';
import PokemonStats from './components/pokemon-stats';
import { useGameManager } from './hooks/use-game-manager';
// import { useWindowSize } from 'react-use';
// import { GameState } from './hooks/use-game-manager';

const App = () => {
  const {
    loadNewPokemon,
    pokemon,
    error,
    isLoading,
    handlePokemonNameSubmit,
    gameState,
    wins,
    losses,
    winRate,
  } = useGameManager();

  //const { width, height } = useWindowSize();

  if (error) {
    return (
      <div className='bg-red-500 text-white p-4 rounded-lg text-center'>
        Error: {error}
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-red-600 flex flex-col items-center justify-center p-4 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-blue-500 clip-path-burst'></div>
      {/* <img
        src='https://www.nicepng.com/png/full/10-100000_0-yorum---unknown-pokemon-question-mark-transparent-png.png'
        alt='Question Mark'
        className='absolute top-1/4 right-10 h-40 animate-pulse'
      /> */}
      <img
        src='https://www.kindpng.com/picc/m/0-7544_pokemon-logo-png-transparent-png.png'
        alt='Pokemon Logo'
        className='absolute bottom-10 right-10 h-20'
      />

      <div className='z-10 w-full max-w-md'>
        <PokemonDisplay
          pokemon={pokemon}
          isLoading={isLoading}
          gameState={gameState}
        />
        <PokemonForm
          handlePokemonNameSubmit={handlePokemonNameSubmit}
          gameState={gameState}
        />
        <PokemonResult
          loadNewPokemon={loadNewPokemon}
          gameState={gameState}
        />
        <PokemonStats
          wins={wins}
          losses={losses}
          winRate={winRate}
        />
      </div>
    </div>
  );
};

export default App;
