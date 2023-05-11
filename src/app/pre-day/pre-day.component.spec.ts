import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDayComponent } from './pre-day.component';

describe('PreDayComponent', () => {
  let component: PreDayComponent;
  let fixture: ComponentFixture<PreDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
