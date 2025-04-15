import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingFieldComponent } from './working-field.component';

describe('WorkingFieldComponent', () => {
  let component: WorkingFieldComponent;
  let fixture: ComponentFixture<WorkingFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
