import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Book } from '../../data-access';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Load Books': emptyProps(),
    'Load Books Success': props<{ books: Book[] }>(),
    'Load Books Error': props<{ message: string }>(),
  },
});
