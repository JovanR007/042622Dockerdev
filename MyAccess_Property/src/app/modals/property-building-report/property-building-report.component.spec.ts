import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBuildingReportComponent } from './property-building-report.component';

describe('PropertyBuildingReportComponent', () => {
  let component: PropertyBuildingReportComponent;
  let fixture: ComponentFixture<PropertyBuildingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBuildingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBuildingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
