import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/index.reducer';
import { Book } from '../../models/books';

export const selectAppState = (state: AppState) => state;
export const selectBooksState = (state: AppState) => state.books;

export const selectBooks = createSelector(
  selectBooksState,
  (state) =>
    new Book(state.id, state.volumeInfo.title, state.volumeInfo.authors)
);

export const getBooksErrorMsg = createSelector(
  selectBooksState,
  (state) => state.errorMsg
);

export const isBooksDataLoaded = createSelector(
  selectBooksState,
  (state) => state.dataLoaded
);
