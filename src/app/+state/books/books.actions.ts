import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Book } from '../../models/books';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Load Books': emptyProps(),
    'Books Loaded': props<{ books: Book[] }>(),
    'Set Error Message': props<{ message: string }>(),
  },
});
