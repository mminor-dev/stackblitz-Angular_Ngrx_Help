import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Pokemon } from '../../data-access/pokemon/pokemon';
import { Book } from '../../data-access/books/books';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  books: Book[] = [];
  pokemon: Pokemon[] = [];

  books2: Book[] = [];
  pokemon2: Pokemon[] = [];

  constructor(private readonly store: Store) {}

  ngOnInit() {}
}
