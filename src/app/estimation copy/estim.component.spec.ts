import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimComponent } from './estim.component';

describe('EstimComponent', () => {
  let component: EstimComponent;
  let fixture: ComponentFixture<EstimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
