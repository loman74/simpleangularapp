import { EventEmitter } from '@angular/core';
import { DataServiceInterface } from '../data.service';
import { Book } from '../model/Book';


export class MockDataService implements DataServiceInterface {
  books = new Array<Book>();
  bookAddEvent = new EventEmitter<Book>();
  bookDeletedEvent = new EventEmitter<Book>();

  addBook(book: Book){
    this.bookAddEvent.emit(book);
  }
  deleteBook(){}

}
