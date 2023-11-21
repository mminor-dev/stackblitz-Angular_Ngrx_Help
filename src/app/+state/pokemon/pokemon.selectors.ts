import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/index.reducer';
import { Pokemon } from '../../models/pokemon';

export const selectAppState = (state: AppState) => state;
export const selectPokemonState = (state: AppState) => state.pokemon;

export const selectPokemon = createSelector(
  selectPokemonState,
  (state) => new Pokemon(state.id, state.name, state.url)
);

export const getPokemonErrorMsg = createSelector(
  selectPokemonState,
  (state) => state.errorMsg
);

export const isPokemonDataLoaded = createSelector(
  selectPokemonState,
  (state) => state.dataLoaded
);
