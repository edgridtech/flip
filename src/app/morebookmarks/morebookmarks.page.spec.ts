import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorebookmarksPage } from './morebookmarks.page';

describe('MorebookmarksPage', () => {
  let component: MorebookmarksPage;
  let fixture: ComponentFixture<MorebookmarksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorebookmarksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorebookmarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
