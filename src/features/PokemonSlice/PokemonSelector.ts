import { RootState } from "../../app/store";

export const PokemonSelector = (state: RootState) => {
  const pokemonListObject = state.pokemon.pokemonListObject;
  const isLoadingMorePokemon = state.pokemon.isLoadingMorePokemon;
  const pokemonState = state.pokemon.pokemonState;
  // const { pokemonState, pokemonListObject } = dataApi;
  const next = pokemonState.next;
  const previous = pokemonState.previous;
  const pokemonStateResults = pokemonState.results;

  const hasNextData = next !== (null && "" && undefined);

  return {
    pokemonListObject,
    pokemonStateResults,
    previous,
    isLoadingMorePokemon,
    hasNextData,
  };
};
