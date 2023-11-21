import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PokemonService } from '../../data-access';
import { PokemonActions } from './pokemon.actions';

@Injectable()
export class PokemonEffects {
  constructor(private actions$: Actions, private pokemonService: PokemonService) {}

  loadPokemon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PokemonActions.loadPokemon),
      switchMap(() => {
        return this.pokemonService.getPokemon().pipe(
          map((pokemon) => PokemonActions.loadPokemonSuccess({ pokemon })),
          catchError(() =>
            of(PokemonActions.loadPokmeonError({ message: 'something bad happened to your pokemon' }))
          )
        );
      })
    );
  });
}
