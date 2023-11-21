import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { BooksActions, PokemonActions, booksQuery, pokemonQuery } from '../../+state';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  readonly books$ = this.store.select(booksQuery.selectBooks);
  readonly pokemon$ = this.store.select(pokemonQuery.selectPokemon);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(BooksActions.loadBooks());
    this.store.dispatch(PokemonActions.loadPokemon());
  }
}
