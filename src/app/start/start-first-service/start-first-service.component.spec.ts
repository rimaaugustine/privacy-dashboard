import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFirstServiceComponent } from './start-first-service.component';

describe('StartFirstServiceComponent', () => {
  let component: StartFirstServiceComponent;
  let fixture: ComponentFixture<StartFirstServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartFirstServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartFirstServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
