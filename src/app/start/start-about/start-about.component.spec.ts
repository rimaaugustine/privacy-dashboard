import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAboutComponent } from './start-about.component';

describe('StartAboutComponent', () => {
  let component: StartAboutComponent;
  let fixture: ComponentFixture<StartAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
