import "./Home.scss";
import { useState } from "react";

import { useAppSelector } from "../app/hooks";
import { PokemonSelector } from "../features/PokemonSlice/PokemonSelector";
import { isArrayEmpty } from "../app/common";
import { useDispatchPokemon } from "../features/PokemonSlice/PokemonApi";
import Loading from "../Components/Common/Loading/Loading";
import CardTextAndImage from "../Components/Layout/CardTextAndImage/CardTextAndImage";

function Home() {
  const [queryParams, setQueryParams] = useState({ limit: 25, offset: 0 });
  const { pokemonListObject, isLoadingMorePokemon, hasNextData } =
    useAppSelector(PokemonSelector);
  const queryString = `?offset=${queryParams.offset}&limit=${queryParams.limit}`;
  useDispatchPokemon(queryString);

  const handleScroll = (event: any) => {
    const bottom =
      event.target.scrollHeight - event.target.clientHeight - 80 <=
      event.target.scrollTop;
    const newOffset = queryParams.offset + 10;
    const newLimit = 10;
    if (bottom && hasNextData && isLoadingMorePokemon === false) {
      setQueryParams({ limit: newLimit, offset: newOffset });
    }

    console.log("calling api");
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
      {isLoadingMorePokemon && <Loading />}
    </div>
  );
}

export default Home;
