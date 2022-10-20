import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitantesComponent } from './add-visitantes.component';

describe('AddVisitantesComponent', () => {
  let component: AddVisitantesComponent;
  let fixture: ComponentFixture<AddVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
