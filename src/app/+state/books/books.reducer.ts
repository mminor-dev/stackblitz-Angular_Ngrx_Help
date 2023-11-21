import { createReducer, on } from '@ngrx/store';

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

  on(BooksActions.Actions.loadBooks, (state) => {
    return { ...state, loading: true, errorMessage: undefined };
  }),

  on(BooksActions.Actions.booksLoaded, (state, action) => {
    return {
      ...state,
      books: action.books,
      status: Status.success,
      dataLoaded: true,
      errorMsg: '',
    };
  })
);
