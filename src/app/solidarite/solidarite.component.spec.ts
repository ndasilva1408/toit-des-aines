import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidariteComponent } from './solidarite.component';

describe('SolidariteComponent', () => {
  let component: SolidariteComponent;
  let fixture: ComponentFixture<SolidariteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidariteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
