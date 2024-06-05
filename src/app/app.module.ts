// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { bookReducer } from './state/book.reducer';
import { BookEffects } from './state/book.effects';
import { BookService } from './services/book.service';
import { environment } from '../environments/environment';
import { BookListComponent } from './components/book-list/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent  
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: bookReducer }),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
