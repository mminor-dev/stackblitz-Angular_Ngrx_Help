import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, concatMap } from 'rxjs/operators';

@Injectable()
export class PokemonEffects {
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}

  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActions.loadPokemon),
      switchMap((action) => this.pokemonService.getPokemon()),
      tap((res: HttpResponse) =>
        console.log(
          `pokemon.effects - loadPokemon$ - res.status is ${res.status} res.message is ${res.message} res.data is `,
          res.data
        )
      ),

      switchMap((res: HttpResponse) => {
        if (res.data) {
          // Dispatch Pokemon Loaded Action
          return of(
            PokemonActions.Actions.pokemonLoaded({ pokemon: res.data })
          );
        } else {
          let errorMessage = 'Error: Sorry, Pokemon API is offline.';

          if (res.message) {
            errorMessage = res.message;
          }

          // Dispatch Error Message Action
          return of(
            PokemonActions.Actions.setErrorMessage({ message: errorMessage })
          );
        }
      })
    )
  );
}
