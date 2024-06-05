// src/app/state/book.actions.ts
import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book.model';

export const loadBooks = createAction('[Book List] Load Books');
export const loadBooksSuccess = createAction('[Book List] Load Books Success', props<{ books: Book[] }>());
export const addBook = createAction('[Book List] Add Book', props<{ book: Book }>());
export const removeBook = createAction('[Book List] Remove Book', props<{ bookId: string }>());
