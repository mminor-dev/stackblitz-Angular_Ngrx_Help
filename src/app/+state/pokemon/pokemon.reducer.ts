import { createReducer, on } from '@ngrx/store';

import { Pokemon } from '../../data-access';
import { PokemonActions } from './pokemon.actions';

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

  on(PokemonActions.loadPokemon, (state) => {
    return { ...state, loading: true };
  }),

  on(PokemonActions.loadPokemonSuccess, (state, { pokemon }) => {
    return { ...state, pokemon, loading: false };
  })
);
