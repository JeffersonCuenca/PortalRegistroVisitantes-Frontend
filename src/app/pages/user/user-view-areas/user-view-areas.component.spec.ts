import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAreasComponent } from './user-view-areas.component';

describe('UserViewAreasComponent', () => {
  let component: UserViewAreasComponent;
  let fixture: ComponentFixture<UserViewAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
