import { Page3Component } from './page3/page3.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderComponent, FooterComponent, Page1Component, Page2Component, Page3Component
      ],
      providers: [{provide: 'DataServiceInterface', useClass : DataService }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SimpleAngularApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SimpleAngularApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#manu-id").textContent).toContain('Page 2');
  });
});
