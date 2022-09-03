import { useEffect } from "react";
import { getPokemons, getDetailPokemon } from "./PokemonSlice";
import { useAppDispatch } from "./../../app/hooks";

export function useDispatchPokemon(queryString: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getPokemons(queryString)).then((res) => {
      const pokemonsArray = res.payload.results;

      const loadCatalogsAsync = async () => {
        try {
          pokemonsArray.map(async (pokemon: any) => {
            await dispatch(getDetailPokemon(pokemon.name));
          });
        } catch (e) {
          console.error(e);
        }
      };

      loadCatalogsAsync();
    });
    return () => controller.abort();
  }, [dispatch, queryString]);

  return;
}
