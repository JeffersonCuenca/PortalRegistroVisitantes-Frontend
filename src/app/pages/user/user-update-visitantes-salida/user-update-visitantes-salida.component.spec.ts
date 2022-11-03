import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateVisitantesSalidaComponent } from './user-update-visitantes-salida.component';

describe('UserUpdateVisitantesSalidaComponent', () => {
  let component: UserUpdateVisitantesSalidaComponent;
  let fixture: ComponentFixture<UserUpdateVisitantesSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateVisitantesSalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdateVisitantesSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
