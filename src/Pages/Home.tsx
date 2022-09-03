import "./Home.scss";
import CardTextAndImage from "../Components/Layout/CardTextAndImage/CardTextAndImage";
import { useState } from "react";

import { useAppSelector } from "../app/hooks";
import { PokemonSelector } from "../features/PokemonSlice/PokemonSelector";
import { isArrayEmpty } from "../app/common";
import { useDispatchPokemon } from "../features/PokemonSlice/PokemonApi";

function Home() {
  const [queryParams, setQueryParams] = useState({ limit: 35, offset: 0 });
  const { pokemonListObject } = useAppSelector(PokemonSelector);
  const queryString = `?offset=${queryParams.offset}&limit=${queryParams.limit}`;
  useDispatchPokemon(queryString);

  return (
    <div className="home-root">
      <div className="pokemon-group">
        {!isArrayEmpty(pokemonListObject) &&
          pokemonListObject.map((pokemon: any) => (
            <CardTextAndImage
              className="pokemon"
              key={pokemon.id}
              text={pokemon.name}
              alt={pokemon.name}
              src={pokemon.sprites.front_default}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
