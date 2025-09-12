import type { Pokemon } from '../types/pokemon.interface';
import { getRandomIntInclusive } from '../utils/random-number';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon';
const MAX_POKEMON_COUNT = 151;

const getRandomPokemonId = async (): Promise<Pokemon> => {
  const randomId = getRandomIntInclusive(1, MAX_POKEMON_COUNT);
  const response = await fetch(`${POKEMON_API_URL}/${randomId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon');
  }
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default,
  };
};

const normalizePokemonName = (name: string): string => {
  return name
    .toLocaleLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-');
};

const isPokemonNameValid = (pokemonName: string, userInput: string) => {
  const normalizedPokemonName = normalizePokemonName(pokemonName);
  const normalizedUserInput = normalizePokemonName(userInput);
  return normalizedPokemonName === normalizedUserInput;
};

export const pokemonService = {
  getRandomPokemonId,
  isPokemonNameValid,
};
