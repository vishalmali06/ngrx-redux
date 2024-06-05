// src/app/services/book.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getAll(): Observable<Book[]> {
    const books: Book[] = [
      { id: '1', title: '1984', author: 'George Orwell' },
      { id: '2', title: 'Brave New World', author: 'Aldous Huxley' }
    ];
    return of(books);
  }
}
