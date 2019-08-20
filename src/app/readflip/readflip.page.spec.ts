import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadflipPage } from './readflip.page';

describe('ReadflipPage', () => {
  let component: ReadflipPage;
  let fixture: ComponentFixture<ReadflipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadflipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadflipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
