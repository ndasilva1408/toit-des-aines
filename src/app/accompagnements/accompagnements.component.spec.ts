import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnementsComponent } from './accompagnements.component';

describe('AccompagnementsComponent', () => {
  let component: AccompagnementsComponent;
  let fixture: ComponentFixture<AccompagnementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccompagnementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccompagnementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
