import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageemployeeComponent } from './pageemployee.component';

describe('PageemployeeComponent', () => {
  let component: PageemployeeComponent;
  let fixture: ComponentFixture<PageemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
