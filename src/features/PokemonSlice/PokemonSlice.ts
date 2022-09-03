import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../Api/Request";
import { ACTION, API_PATH } from "../../app/constant";

const initialState: InitialState = {
  pokemonState: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  pokemonListObject: [],
  status: "idle",
  isLoadingMorePokemon: false,
};

export const PokemonSlice = createSlice({
  name: ACTION.POKEMON.NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.status = "loading";
        state.isLoadingMorePokemon = true;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.status = "idle";
        const newPokemonState = {
          count: action.payload.count,
          next: action.payload.next,
          previous: action.payload.previous,
          results: [...state.pokemonState.results, ...action.payload.results],
        };
        state.pokemonState = newPokemonState;
        state.isLoadingMorePokemon = false;
      })
      .addCase(getPokemons.rejected, (state) => {
        state.status = "failed";
        state.isLoadingMorePokemon = false;
      })
      .addCase(getDetailPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDetailPokemon.fulfilled, (state, action) => {
        state.pokemonListObject = [...state.pokemonListObject, action.payload];
      })
      .addCase(getDetailPokemon.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const getPokemons = createAsyncThunk(
  ACTION.POKEMON.GET_POKEMONS,
  async (queryString: string) => {
    const response = await get(API_PATH.GET_POKEMON_LIST + queryString);
    return response.data;
  }
);

export const getDetailPokemon = createAsyncThunk(
  ACTION.POKEMON.GET_POKEMONS_INFORMATION,
  async (name: string) => {
    const response = await get(API_PATH.GET_POKEMON_LIST + "/" + name);
    return response.data;
  }
);

export default PokemonSlice.reducer;

export interface InitialState {
  pokemonState: PokemonState;
  pokemonListObject: any[];
  status: "idle" | "loading" | "failed";
  isLoadingMorePokemon: boolean;
}

interface PokemonState {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}
