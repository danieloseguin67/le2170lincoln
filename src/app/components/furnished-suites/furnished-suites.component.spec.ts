import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnishedSuitesComponent } from './furnished-suites.component';

describe('FurnishedSuitesComponent', () => {
  let component: FurnishedSuitesComponent;
  let fixture: ComponentFixture<FurnishedSuitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnishedSuitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnishedSuitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
