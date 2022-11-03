import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateVisitantesComponent } from './user-update-visitantes.component';

describe('UserUpdateVisitantesComponent', () => {
  let component: UserUpdateVisitantesComponent;
  let fixture: ComponentFixture<UserUpdateVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateVisitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdateVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
