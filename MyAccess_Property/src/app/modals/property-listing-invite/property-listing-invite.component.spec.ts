import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingInviteComponent } from './property-listing-invite.component';

describe('PropertyListingInviteComponent', () => {
  let component: PropertyListingInviteComponent;
  let fixture: ComponentFixture<PropertyListingInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyListingInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListingInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
