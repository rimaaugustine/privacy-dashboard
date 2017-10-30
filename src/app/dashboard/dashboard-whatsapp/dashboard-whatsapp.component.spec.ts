import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWhatsappComponent } from './dashboard-whatsapp.component';

describe('DashboardWhatsappComponent', () => {
  let component: DashboardWhatsappComponent;
  let fixture: ComponentFixture<DashboardWhatsappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWhatsappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
