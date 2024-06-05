import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { loadBooks, addBook, removeBook } from '../../state/book.actions';
import { AppState } from '../../../app.state';
import { selectAllBooks } from '../../../state/book.selectors';
import { Book } from '../../../models/book.model';
import { addBook, loadBooks, removeBook } from '../../../state/book.actions';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',  // Use templateUrl
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {  // Use AppState
    this.books$ = this.store.select(selectAllBooks);
  }

  ngOnInit() {
    this.store.dispatch(loadBooks());

    // Subscribe to the store and log the state
    this.store.subscribe(state => {
      console.log('Current state:', state);
    });

  }

  add() {
    const newBook: Book = {
      id: Math.random().toString(36).substring(7),
      title: 'New Book',
      author: 'Anonymous'
    };
    this.store.dispatch(addBook({ book: newBook }));
  }

  remove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
