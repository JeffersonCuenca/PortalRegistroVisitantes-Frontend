import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitantesComponent } from './view-visitantes.component';

describe('ViewVisitantesComponent', () => {
  let component: ViewVisitantesComponent;
  let fixture: ComponentFixture<ViewVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVisitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
