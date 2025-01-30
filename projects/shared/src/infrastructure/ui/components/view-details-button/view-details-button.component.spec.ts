import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsButtonComponent } from './view-details-button.component';

describe('ViewDetailsButtonComponent', () => {
  let component: ViewDetailsButtonComponent;
  let fixture: ComponentFixture<ViewDetailsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDetailsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetailsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
