import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySectionComponent } from './lazy-section.component';

describe('LazySectionComponent', () => {
  let component: LazySectionComponent;
  let fixture: ComponentFixture<LazySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
