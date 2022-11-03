import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddVisitantesComponent } from './user-add-visitantes.component';

describe('UserAddVisitantesComponent', () => {
  let component: UserAddVisitantesComponent;
  let fixture: ComponentFixture<UserAddVisitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddVisitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
