import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfurnishedSuitesComponent } from './unfurnished-suites.component';

describe('UnfurnishedSuitesComponent', () => {
  let component: UnfurnishedSuitesComponent;
  let fixture: ComponentFixture<UnfurnishedSuitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnfurnishedSuitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnfurnishedSuitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
