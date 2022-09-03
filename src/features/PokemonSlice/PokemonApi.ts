import { useEffect } from "react";
import { getPokemons, getDetailPokemon } from "./PokemonSlice";
import { useAppDispatch } from "./../../app/hooks";

export function useDispatchPokemon(queryString: string) {
  const dispatch = useAppDispatch();

  function dispatchFirstTime() {
    dispatch(getPokemons(queryString)).then((res) => {
      const pokemonsArray = res.payload.results;
      pokemonsArray.map((pokemon: any) => {
        dispatch(getDetailPokemon(pokemon.name));
      });
    });
  }
  useEffect(() => {
    const controller = new AbortController();
    dispatchFirstTime();
    return () => controller.abort();
  }, []);

  return;
}
