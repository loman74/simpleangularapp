import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../data.service';
import { MockDataService } from '../mocks/MockDataService';
import { Book } from '../model/Book';

import { Page1Component } from './page1.component';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1Component ],
      providers: [{provide: 'DataServiceInterface', useExisting : DataService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly increment number of books written by matt', () => {
    const startValue = component.numberOfBooksWrittenByMatt;
    const book = new Book();
    book.author = 'matt';
    const dataService = fixture.debugElement.injector.get(DataService);
    dataService.addBook(book);
    expect(component.numberOfBooksWrittenByMatt).toEqual(startValue + 1);
  });

  it('should correctly increment number of books written by matt ver 2', () => {

    const book = new Book();
    book.author = 'matt';
    const dataService = new MockDataService();
    component = new Page1Component(dataService);
    component.ngOnInit();
    const startValue = component.numberOfBooksWrittenByMatt;
    dataService.addBook(book);
    expect(component.numberOfBooksWrittenByMatt).toEqual(startValue + 1);
  });

});
