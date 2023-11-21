import { createReducer, on } from '@ngrx/store';

export interface PokemonState {
  pokemon: Pokemon[];
  loading: boolean;
}

export const pokemonInitialState: PokemonState = {
  pokemon: [],
  loading: false,
};

export const pokemonReducer = createReducer(
  pokemonInitialState,

  on(PokemonActions.loadPokemon, (state, action) => {})
);
