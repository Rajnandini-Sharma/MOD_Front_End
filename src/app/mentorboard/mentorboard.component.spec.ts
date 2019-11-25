import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorboardComponent } from './mentorboard.component';

describe('MentorboardComponent', () => {
  let component: MentorboardComponent;
  let fixture: ComponentFixture<MentorboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
