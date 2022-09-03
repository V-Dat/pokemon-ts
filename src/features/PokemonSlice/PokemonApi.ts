import { useEffect } from "react";
import { getPokemons, getDetailPokemon } from "./PokemonSlice";
import { useAppDispatch } from "./../../app/hooks";

export function useDispatchPokemon(queryString: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getPokemons(queryString)).then((res) => {
      const pokemonsArray = res.payload.results;

      console.log(333, pokemonsArray);
      pokemonsArray.map((pokemon: any) => {
        dispatch(getDetailPokemon(pokemon.name));
      });
    });
    return () => controller.abort();
  }, [dispatch, queryString]);

  return;
}
