import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewVisitantesComponent } from './user-view-visitantes.component';

describe('UserViewVisitantesComponent', () => {
  let component: UserViewVisitantesComponent;
  let fixture: ComponentFixture<UserViewVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewVisitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
