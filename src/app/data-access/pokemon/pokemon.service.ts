import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../models/httpresponse';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(): Observable<HttpResponse> {
    const url = `https://pokeapi.co/api/v2/pokemon`;

    const response$ = this.http.get(url, { observe: 'response' }).pipe(
      map((res: any) => {
        let responseBody = res?.body;
        let result: HttpResponse;
        if (res) {
          result = {
            status: res.status,
            data: responseBody.results,
            success: 'true',
            message: 'OK',
          };
        } else {
          result = {
            status: res.status,
            data: undefined,
            success: 'false',
            message: 'Failed',
          };
        }

        return result;
      })
    );

    return response$;
  }
}
