import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherDetailedCardComponent } from './further-detailed-card.component';

describe('FurtherDetailedCardComponent', () => {
  let component: FurtherDetailedCardComponent;
  let fixture: ComponentFixture<FurtherDetailedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurtherDetailedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurtherDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
