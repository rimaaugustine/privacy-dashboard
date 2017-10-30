import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFacebookComponent } from './dashboard-facebook.component';

describe('DashboardFacebookComponent', () => {
  let component: DashboardFacebookComponent;
  let fixture: ComponentFixture<DashboardFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
