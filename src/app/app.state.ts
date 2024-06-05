// src/app/app.state.ts
import { BookState } from './state/book.reducer';

export interface AppState {
  books: BookState;
}
