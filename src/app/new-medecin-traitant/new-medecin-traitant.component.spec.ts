import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedecinTraitantComponent } from './new-medecin-traitant.component';

describe('NewMedecinTraitantComponent', () => {
  let component: NewMedecinTraitantComponent;
  let fixture: ComponentFixture<NewMedecinTraitantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMedecinTraitantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMedecinTraitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
