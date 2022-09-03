import "./Home.scss";
import CardTextAndImage from "../Components/Layout/CardTextAndImage/CardTextAndImage";
import { useState } from "react";

import { useAppSelector } from "../app/hooks";
import { PokemonSelector } from "../features/PokemonSlice/PokemonSelector";
import { isArrayEmpty } from "../app/common";
import { useDispatchPokemon } from "../features/PokemonSlice/PokemonApi";

function Home() {
  const [queryParams, setQueryParams] = useState({ limit: 25, offset: 0 });
  const { pokemonListObject, isLoadingMorePokemon, next } =
    useAppSelector(PokemonSelector);
  const queryString = `?offset=${queryParams.offset}&limit=${queryParams.limit}`;
  useDispatchPokemon(queryString);

  const handleScroll = (event: any) => {
    const bottom =
      event.target.scrollHeight - event.target.clientHeight - 300 <=
      event.target.scrollTop;
    const hasNextData = next !== (null && "" && undefined);
    const newOffset = queryParams.offset + 25;
    if (bottom && hasNextData && isLoadingMorePokemon === false) {
      setQueryParams((prev) => ({ ...prev, offset: newOffset }));
    }
  };

  return (
    <div className="home-root" onScroll={handleScroll}>
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
