import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessLayoutComponent } from './guess-layout.component';

describe('GuessLayoutComponent', () => {
  let component: GuessLayoutComponent;
  let fixture: ComponentFixture<GuessLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
