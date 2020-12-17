import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SimpleAngularApp';

  constructor(){
    this.currentPage = 1;
  }


  @ViewChild('footer',{static: true})
  // @ts-ignore
  footerComponent:FooterComponent;

  startTime: string = new Date().toString();

  @ViewChild('page2',{static: true})
  // @ts-ignore
  page2Component: Page2Component ;

  currentPage = 1;

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }


  updateLastAccessed(){
    console.log("previous value was: " + this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }

  incrementHitCounter(page: number){
    this.currentPage = page;
    if(page === 2){
      this.page2Component.incrementHitCounter();
    }
  }

}
