import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { BooksService } from '../../data-access';
import { BooksActions } from './books.actions';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      switchMap(() => {
        return this.booksService.getBooks().pipe(
          map((books) => BooksActions.loadBooksSuccess({ books })),
          catchError(() =>
            of(BooksActions.loadBooksError({ message: 'something bad happened to your pokemon' }))
          )
        );
      })
    );
  });

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
