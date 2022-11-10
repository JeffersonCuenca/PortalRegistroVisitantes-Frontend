import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRolComponent } from './add-user-rol.component';

describe('AddUserRolComponent', () => {
  let component: AddUserRolComponent;
  let fixture: ComponentFixture<AddUserRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
