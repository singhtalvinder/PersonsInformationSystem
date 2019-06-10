import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPersonsComponent } from './selected-persons.component';

describe('SelectedPersonsComponent', () => {
  let component: SelectedPersonsComponent;
  let fixture: ComponentFixture<SelectedPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
