import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMembro } from './cadastro-membro';

describe('CadastroMembro', () => {
  let component: CadastroMembro;
  let fixture: ComponentFixture<CadastroMembro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroMembro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMembro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
