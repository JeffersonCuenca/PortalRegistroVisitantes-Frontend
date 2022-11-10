import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserRolComponent } from './view-user-rol.component';

describe('ViewUserRolComponent', () => {
  let component: ViewUserRolComponent;
  let fixture: ComponentFixture<ViewUserRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
