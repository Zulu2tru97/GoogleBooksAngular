import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows the title of a book', () => {
    const labelElement= fixture.debugElement.query(By.css('.title'));
    expect(labelElement.nativeElement.textContent).toContain('Title: ' +component.book.title);
  });

  it('shows the author of a book', () => {
    const labelElement= fixture.debugElement.query(By.css('.author'));
    expect(labelElement.nativeElement.textContent).toContain('Author: ' +component.book.author);
  });

  it('shows the descrpition of a book', () => {
    const labelElement= fixture.debugElement.query(By.css('.desc'));
    expect(labelElement.nativeElement.textContent).toContain('Description: ' +component.book.description);
  });

  it('shows the type of a book', () => {
    const labelElement= fixture.debugElement.query(By.css('.type'));
    expect(labelElement.nativeElement.textContent).toContain('Type: ' +component.book.type);
  });

  it('shows the img of a book', () => {
    const labelElement= fixture.debugElement.query(By.css('.me'));
    expect(labelElement.nativeElement.getAttribute('src')).toContain('https://th.bing.com/th/id/OIP.xjKR2ycjayieMrvGF0opOAHaE1?w=275&h=180&c=7&r=0&o=5&dpr=2&pid=1.7');
  });
});
