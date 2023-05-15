import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySlotsComponent } from './weekly-slots.component';

describe('WeeklySlotsComponent', () => {
  let component: WeeklySlotsComponent;
  let fixture: ComponentFixture<WeeklySlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklySlotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklySlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
