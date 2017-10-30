import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSupportComponent } from './start-support.component';

describe('StartSupportComponent', () => {
  let component: StartSupportComponent;
  let fixture: ComponentFixture<StartSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
