import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

import { BooksResponse } from './books';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks() {
    const url = `https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks`;

    const books$ = this.http.get<BooksResponse>(url).pipe(tap((rsp_books) => console.log({ rsp_books })));
    return books$.pipe(map(({ items }) => items));
  }
}
