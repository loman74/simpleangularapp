import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Book } from './model/Book';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addbook increases the size of the books array', () => {
    const book = new Book();
    service.addBook(book);
    expect(service.books.length).toEqual(4);
    });

    it('check that the event emitter is firing an event when a book is added', () => {
      const service: DataService = TestBed.get(DataService);
      spyOn(service.bookAddEvent, 'emit');
      const book = new Book();
      service.addBook(book);
      expect(service.bookAddEvent.emit).toHaveBeenCalledWith(book);

    });

});
