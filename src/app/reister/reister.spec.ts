import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reister } from './reister';

describe('Reister', () => {
  let component: Reister;
  let fixture: ComponentFixture<Reister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
