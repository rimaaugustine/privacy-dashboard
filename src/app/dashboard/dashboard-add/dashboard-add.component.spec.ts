import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddComponent } from './dashboard-add.component';

describe('DashboardAddComponent', () => {
  let component: DashboardAddComponent;
  let fixture: ComponentFixture<DashboardAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
