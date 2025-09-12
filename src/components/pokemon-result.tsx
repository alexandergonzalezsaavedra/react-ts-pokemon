import { GameState } from '../hooks/use-game-manager';

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState;
}
const PokemonResult = ({ loadNewPokemon, gameState }: Props) => {
  console.log('ESTE ES EL ESTADO EN EL COMPONENTE PokemonResult: ' + gameState);

  if (gameState === GameState.Playing) {
    console.log('esta jugando');
    return null;
  }

  return (
    <div
      className={`alert text-center ${
        gameState === GameState.Won ? 'alert-success' : 'alert-danger'
      }`}
    >
      {gameState === GameState.Won ? (
        <h2>
          ¡Correcto! <i className='bi bi-arrow-through-heart-fill'></i>
        </h2>
      ) : (
        <h2>
          Incorrecto <i className='bi bi-bug-fill'></i>
        </h2>
      )}
      <button
        onClick={loadNewPokemon}
        className='btn btn-dark'
      >
        Volver a jugar
      </button>
    </div>
  );
};
export default PokemonResult;
