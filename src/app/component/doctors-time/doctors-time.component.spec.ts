import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsTimeComponent } from './doctors-time.component';

describe('DoctorsTimeComponent', () => {
  let component: DoctorsTimeComponent;
  let fixture: ComponentFixture<DoctorsTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
