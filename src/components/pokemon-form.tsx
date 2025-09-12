import { useState } from 'react';
import type { GameState } from '../hooks/use-game-manager';

interface Props {
  handlePokemonNameSubmit: (userInput: string) => void;
  gameState: GameState;
}

const PokemonForm = ({ handlePokemonNameSubmit, gameState }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      console.log('el campo esta vacio');
      return;
    }
    handlePokemonNameSubmit(inputValue.trim().toLocaleLowerCase());
    console.log(`Buscando Pokémon: ${inputValue}`);
    setInputValue('');
  };

  return (
    <form
      className='input-group my-4'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='form-control'
        placeholder='¿Quien es ese Pokémon?'
        aria-label='¿Quien es ese Pokémon?'
        aria-describedby='button-addon2'
        disabled={gameState !== 'playing'}
      />
      <button
        className='btn btn-dark'
        type='submit'
        id='button-addon2'
        disabled={!inputValue.trim() || gameState !== 'playing'}
      >
        Jugar
      </button>
    </form>
  );
};

export default PokemonForm;
