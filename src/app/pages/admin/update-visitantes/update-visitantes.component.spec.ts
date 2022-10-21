import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisitantesComponent } from './update-visitantes.component';

describe('UpdateVisitantesComponent', () => {
  let component: UpdateVisitantesComponent;
  let fixture: ComponentFixture<UpdateVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVisitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
