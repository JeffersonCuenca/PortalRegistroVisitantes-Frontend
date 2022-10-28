import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitantesFechasComponent } from './view-visitantes-fechas.component';

describe('ViewVisitantesFechasComponent', () => {
  let component: ViewVisitantesFechasComponent;
  let fixture: ComponentFixture<ViewVisitantesFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVisitantesFechasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVisitantesFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
