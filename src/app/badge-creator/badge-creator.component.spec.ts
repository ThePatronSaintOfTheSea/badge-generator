import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeCreatorComponent } from './badge-creator.component';

describe('BadgeCreatorComponent', () => {
  let component: BadgeCreatorComponent;
  let fixture: ComponentFixture<BadgeCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
