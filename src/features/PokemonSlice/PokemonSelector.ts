import { RootState } from "../../app/store";

export const PokemonSelector = (state: RootState) => {
  const pokemonListObject = state.pokemon.pokemonListObject;
  const pokemonState = state.pokemon.pokemonState;
  // const { pokemonState, pokemonListObject } = dataApi;
  const next = pokemonState.next;
  const previous = pokemonState.previous;
  const pokemonStateResults = pokemonState.results;

  return {
    pokemonListObject,
    pokemonStateResults,
    next,
    previous,
  };
};
