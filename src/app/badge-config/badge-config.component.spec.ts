import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeConfigComponent } from './badge-config.component';

describe('BadgeConfigComponent', () => {
  let component: BadgeConfigComponent;
  let fixture: ComponentFixture<BadgeConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
