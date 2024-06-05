// src/app/state/book.selectors.ts
import { createSelector } from '@ngrx/store';
import { BookState } from './book.reducer';
import { AppState } from '../app.state';

export const selectBooksState = (state: AppState) => state.books;

export const selectAllBooks = createSelector(
  selectBooksState,
  (state: BookState) => state.books
);
