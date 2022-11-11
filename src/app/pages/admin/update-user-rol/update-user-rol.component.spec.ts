import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserRolComponent } from './update-user-rol.component';

describe('UpdateUserRolComponent', () => {
  let component: UpdateUserRolComponent;
  let fixture: ComponentFixture<UpdateUserRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
