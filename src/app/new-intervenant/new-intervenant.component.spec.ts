import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIntervenantComponent } from './new-intervenant.component';

describe('NewIntervenantComponent', () => {
  let component: NewIntervenantComponent;
  let fixture: ComponentFixture<NewIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
