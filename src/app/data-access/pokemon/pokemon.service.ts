import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { PokemonResponse } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon`;

    const pokemon$ = this.http
      .get<PokemonResponse>(url)
      .pipe(tap((rsp_pokemon) => console.log({ rsp_pokemon })));

    return pokemon$.pipe(map(({ results }) => results));
  }
}
