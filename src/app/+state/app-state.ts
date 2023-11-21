import { BooksState, booksInitialState, booksReducer } from './books';
import { PokemonState, pokemonInitialState, pokemonReducer } from './pokemon';

export interface AppState {
  books: BooksState;
  pokemon: PokemonState;
}

export const initialState: AppState = {
  books: booksInitialState,
  pokemon: pokemonInitialState,
};

export const appReducer = {
  books: booksReducer,
  pokemon: pokemonReducer,
};
