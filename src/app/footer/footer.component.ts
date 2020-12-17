import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/Book';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // @ts-ignore
  books: Array<Book>;

  constructor(private dataService: DataService) {

  }

  @Input()
  lastAccessed: string = '';

  ngOnInit(): void {
    this.books = this.dataService.books;
  }

  addBook(){
    const book = new Book();
    book.title = 'another book';
    book.author = 'matt';
    this.dataService.addBook(book);
  }

  addBook2(){
    const book = new Book();
    book.title = 'another book';
    book.author = 'james';
    this.dataService.addBook(book);
  }
}
