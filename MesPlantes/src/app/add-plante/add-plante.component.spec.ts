import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanteComponent } from './add-plante.component';

describe('AddPlanteComponent', () => {
  let component: AddPlanteComponent;
  let fixture: ComponentFixture<AddPlanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPlanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
