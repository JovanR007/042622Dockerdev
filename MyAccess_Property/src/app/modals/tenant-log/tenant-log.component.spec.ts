import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantLogComponent } from './tenant-log.component';

describe('TenantLogComponent', () => {
  let component: TenantLogComponent;
  let fixture: ComponentFixture<TenantLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
