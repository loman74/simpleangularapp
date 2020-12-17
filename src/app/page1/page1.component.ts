import { DataServiceInterface } from './../data.service';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {

  pageName = 'Page 1';
  // @ts-ignore
  books: Array<Book>;
  // @ts-ignore
  numberOfBooksWrittenByMatt: number;

  // @ts-ignore
  subscription: Subscription;
    // @ts-ignore
  subscription2: Subscription;

  constructor(@Inject('DataServiceInterface') private dataService: DataServiceInterface) { }

  ngOnInit(): void {
    setTimeout(() => { this.pageName = 'very first page' }, 5000);
    this.books = this.dataService.books;
    this.numberOfBooksWrittenByMatt = this.books.filter(it => it.author === 'matt').length;
    this.subscription = this.dataService.bookAddEvent.subscribe(
      (newBook: Book) => {
        if (newBook.author === 'matt') {
          this.numberOfBooksWrittenByMatt++;
        }
      },
      (error: Error) => {
        console.log('an error occurred', error);
      },
      () => {
        // complete event
        console.log('event complete');
      }
    );

    this.subscription2 = this.dataService.bookDeletedEvent.subscribe(
      (book: Book) => {
        if (book.author === 'matt') {
          this.numberOfBooksWrittenByMatt--;
        }
      }

    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    console.log('unsubscribing');
  }

  onButtonClick() {
    alert('hello - the date today is ' + new Date());
  }

}
