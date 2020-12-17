import { Book } from './../model/Book';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit, OnDestroy {

  // @ts-ignore
  subscription: Subscription;
  constructor(private dataService: DataService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
this.subscription = this.dataService.bookDeletedEvent.subscribe(
(book: Book) =>{
  alert(`The book called ${book.title}

  was deleted`)
},
(error: Error) =>{
  alert('No books were deleted the error was ' + error);
}

);
  }

deleteLastBook()
{
this.dataService.deleteBook();
}
}
