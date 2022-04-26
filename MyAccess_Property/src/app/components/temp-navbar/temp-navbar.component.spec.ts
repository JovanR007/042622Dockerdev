import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempNavbarComponent } from './temp-navbar.component';

describe('TempNavbarComponent', () => {
  let component: TempNavbarComponent;
  let fixture: ComponentFixture<TempNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
