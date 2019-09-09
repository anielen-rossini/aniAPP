import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarCardapioPage } from './alterar-cardapio.page';

describe('AlterarCardapioPage', () => {
  let component: AlterarCardapioPage;
  let fixture: ComponentFixture<AlterarCardapioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarCardapioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCardapioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
