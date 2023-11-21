import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, concatMap } from 'rxjs/operators';
import { Observable, of, switchMap } from 'rxjs';
import { BooksActions } from '../actions/action-types';
import { BooksService } from '../../services/books.service';
import { HttpResponse } from '../../models/httpresponse';

@Injectable()
export class BooksEffects {
  // The actions$ observable is from @ngrx/effects

  constructor(private actions$: Actions, private booksService: BooksService) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.Actions.loadBooks),
      switchMap((action) => this.booksService.getBooks()),
      tap((res: HttpResponse) =>
        console.log(
          `books.effects - loadBooks$ - res.status is ${res.status} res.message is ${res.message} res.data is `,
          res.data
        )
      ),

      switchMap((res: HttpResponse) => {
        if (res.data) {
          // Dispatch Books Loaded Action
          return of(BooksActions.Actions.booksLoaded({ books: res.data }));
        } else {
          let errorMessage = 'Error: Sorry, Google Books API is offline.';

          if (res.message) {
            errorMessage = res.message;
          }

          // Dispatch Error Message Action
          return of(
            BooksActions.Actions.setErrorMessage({ message: errorMessage })
          );
        }
      })
    )
  );
}
