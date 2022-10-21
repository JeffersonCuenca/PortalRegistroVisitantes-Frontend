import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisitantesSalidaComponent } from './update-visitantes-salida.component';

describe('UpdateVisitantesSalidaComponent', () => {
  let component: UpdateVisitantesSalidaComponent;
  let fixture: ComponentFixture<UpdateVisitantesSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVisitantesSalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVisitantesSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
