import ReactConfetti from 'react-confetti';
import PokemonDisplay from './components/pokemon-display';
import PokemonForm from './components/pokemon-form';
import PokemonResult from './components/pokemon-result';
import PokemonStats from './components/pokemon-stats';
import { useGameManager } from './hooks/use-game-manager';
import { useWindowSize } from 'react-use';
import { GameState } from './hooks/use-game-manager';

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
  const { width, height } = useWindowSize();

  if (error) {
    return <div className='alert alert-danger text-center'>Error: {error}</div>;
  }

  return (
    <div className='container mx-auto my-5'>
      {gameState === GameState.Won && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={200}
          recycle={false}
        />
      )}
      <div className='row d-flex justify-content-center'>
        <div className='col-12 col-md-6 col-lg-4'>
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
          {/* Sección de estadísticas */}
          <PokemonStats wins={wins} losses={losses} winRate={winRate} />
        </div>
      </div>
    </div>
  );
};

export default App;
