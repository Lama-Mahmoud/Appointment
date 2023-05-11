import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySoltsComponent } from './day-slots.component';

describe('DaySoltsComponent', () => {
  let component: DaySoltsComponent;
  let fixture: ComponentFixture<DaySoltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaySoltsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaySoltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
