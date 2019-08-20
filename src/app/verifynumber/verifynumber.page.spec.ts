import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifynumberPage } from './verifynumber.page';

describe('VerifynumberPage', () => {
  let component: VerifynumberPage;
  let fixture: ComponentFixture<VerifynumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifynumberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifynumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
