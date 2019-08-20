import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeemorePage } from './seemore.page';

describe('SeemorePage', () => {
  let component: SeemorePage;
  let fixture: ComponentFixture<SeemorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeemorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeemorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
