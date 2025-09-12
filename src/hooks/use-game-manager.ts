import { useCallback, useEffect, useState } from 'react';
import { pokemonService } from '../services/pokemon.service';
import type { Pokemon } from '../types/pokemon.interface';

// export enum GameState {
//   Playing = 'playing',
//   Won = 'won',
//   Lost = 'lost',
// }

export const GameState = {
  Playing: 'playing',
  Won: 'won',
  Lost: 'lost',
} as const;

export type GameState = (typeof GameState)[keyof typeof GameState];

export const useGameManager = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [gameState, setGameState] = useState<GameState>(GameState.Playing);

  const handlePokemonNameSubmit = useCallback(
    (userInput: string) => {
      if (!pokemon) return;
      const isValid = pokemonService.isPokemonNameValid(
        pokemon.name,
        userInput
      );
      setGameState(isValid ? GameState.Won : GameState.Lost);
    },
    [pokemon]
  );

  const loadNewPokemon = useCallback(async () => {
    setGameState(GameState.Playing);
    setIsLoading(true);
    setError(null);
    console.log('Estado actual: ' + GameState.Playing);
    console.log('Nuevo juego iniciado');
    try {
      const randomPokemon = await pokemonService.getRandomPokemonId();
      setPokemon(randomPokemon);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'No se pudo obtener el Pokémon'
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNewPokemon();
  }, [loadNewPokemon]);

  return {
    pokemon,
    isLoading,
    error,
    loadNewPokemon,
    handlePokemonNameSubmit,
    gameState,
  };
};
