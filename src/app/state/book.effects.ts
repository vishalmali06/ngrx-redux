// src/app/state/book.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { BookService } from '../services/book.service';
import { loadBooks, loadBooksSuccess } from './book.actions';

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(loadBooks),
    mergeMap(() => this.bookService.getAll()
      .pipe(
        map(books => loadBooksSuccess({ books })),
        tap(() => console.log('Books loaded successfully')), // Log side effect
        catchError(() => of({ type: '[Book List] Load Books Failure' }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {}
}
