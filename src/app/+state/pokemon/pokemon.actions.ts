import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Pokemon } from '../../models/pokemon';

export const Actions = createActionGroup({
  source: 'Pokemon',
  events: {
    'Load Pokemon': emptyProps(),
    'Pokemon Loaded': props<{ pokemon: Pokemon[] }>(),
    'Set Error Message': props<{ message: string }>(),
  },
});
