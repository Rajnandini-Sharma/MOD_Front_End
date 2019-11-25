import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSignInComponent } from './mentor-sign-in.component';

describe('MentorSignInComponent', () => {
  let component: MentorSignInComponent;
  let fixture: ComponentFixture<MentorSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
