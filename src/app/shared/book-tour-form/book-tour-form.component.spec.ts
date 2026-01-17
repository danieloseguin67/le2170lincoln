import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTourFormComponent } from './book-tour-form.component';

describe('BookTourFormComponent', () => {
  let component: BookTourFormComponent;
  let fixture: ComponentFixture<BookTourFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTourFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTourFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
