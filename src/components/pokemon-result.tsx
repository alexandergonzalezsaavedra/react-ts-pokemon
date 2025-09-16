import { GameState } from '../hooks/use-game-manager';

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState;
}
const PokemonResult = ({ loadNewPokemon, gameState }: Props) => {
  if (gameState === GameState.Playing) {
    return null;
  }

  const isWinner = gameState === GameState.Won;

  return (
    <div
      className={`text-center p-4 rounded-lg shadow-lg animate-fade-in ${
        isWinner ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      <h2 className='text-2xl font-bold text-white mb-4'>
        {isWinner ? '¡Correcto!' : 'Incorrecto'}
      </h2>
      <button
        onClick={loadNewPokemon}
        className='px-6 py-2 font-bold text-white bg-blue-600 border-2 border-yellow-400 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Volver a jugar
      </button>
    </div>
  );
};
export default PokemonResult;
