import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAreasComponent } from './add-areas.component';

describe('AddAreasComponent', () => {
  let component: AddAreasComponent;
  let fixture: ComponentFixture<AddAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
