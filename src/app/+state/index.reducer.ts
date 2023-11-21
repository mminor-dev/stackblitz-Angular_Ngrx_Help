import { BooksState, booksInitialState, booksReducer } from './books.reducer';
import {
  PokemonState,
  pokemonInitialState,
  pokemonReducer,
} from './pokemon.reducer';

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
