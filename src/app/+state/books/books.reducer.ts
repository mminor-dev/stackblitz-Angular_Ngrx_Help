import { createReducer, on } from '@ngrx/store';

import { Book } from '../../data-access';
import { BooksActions } from './books.actions';

export interface BooksState {
  books: Book[];
  loading: boolean;
  errorMessage?: string;
}

export const booksInitialState: BooksState = {
  books: [],
  loading: false,
};

export const booksReducer = createReducer(
  booksInitialState,

  on(BooksActions.loadBooks, (state) => {
    return { ...state, loading: true, errorMessage: undefined };
  }),

  on(BooksActions.loadBooksSuccess, (state, { books }) => {
    return { ...state, books, loading: false, errorMessage: undefined };
  })
);
