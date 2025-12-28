import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctDetail } from './prodct-detail';

describe('ProdctDetail', () => {
  let component: ProdctDetail;
  let fixture: ComponentFixture<ProdctDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdctDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdctDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
