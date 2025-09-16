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
      className='flex items-center justify-center my-4'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='w-full max-w-xs px-4 py-2 text-gray-800 bg-yellow-400 border-2 border-blue-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='¿Quien es ese Pokémon?'
        aria-label='¿Quien es ese Pokémon?'
        aria-describedby='button-addon2'
        disabled={gameState !== 'playing'}
      />
      <button
        className='px-4 py-2 font-bold text-white bg-blue-600 border-2 border-yellow-400 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50'
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
