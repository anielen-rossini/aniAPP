import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterPage } from './alter.page';

describe('AlterPage', () => {
  let component: AlterPage;
  let fixture: ComponentFixture<AlterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
