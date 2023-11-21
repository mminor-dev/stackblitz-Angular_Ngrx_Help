import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Pokemon } from '../../data-access';

export const PokemonActions = createActionGroup({
  source: 'Pokemon',
  events: {
    'Load Pokemon': emptyProps(),
    'Load Pokemon Success': props<{ pokemon: Pokemon[] }>(),
    'Load Pokmeon Error': props<{ message: string }>(),
  },
});
