// src/app/state/book.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadBooksSuccess, addBook, removeBook } from './book.actions';
import { Book } from '../models/book.model';

export interface BookState {
  books: Book[];
}

export const initialState: BookState = {
  books: []
};

export const bookReducer = createReducer(
  initialState,
  on(loadBooksSuccess, (state, { books }) => {
    console.log('State after loading books:', { ...state, books });
    return { ...state, books };
  }),
  on(addBook, (state, { book }) => {
    const newState = { ...state, books: [...state.books, book] };
    console.log('State after adding a book:', newState);
    return newState;
  }),
  on(removeBook, (state, { bookId }) => {
    const newState = { ...state, books: state.books.filter(book => book.id !== bookId) };
    console.log('State after removing a book:', newState);
    return newState;
  })
);
