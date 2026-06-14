import { Component, OnInit } from '@angular/core';
import { MembroService } from '../../services/membro';
import { Membro } from '../../models/membro';
import { CommonModule } from '@angular/common';
import { Page } from '../../models/page';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-membro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-membro.html',
  styleUrl: './cadastro-membro.css',
})
export class CadastroMembro implements OnInit{

  formulario!: FormGroup;

  page!: Page<Membro>;

  constructor(
    private membroService: MembroService,
    private fb: FormBuilder
  ) { }

  /* CÓDIGO DE TESTE DE INTEGRAÇÃO COM BACKEND
  carregarMembros() {
    this.membroService.listar().subscribe((dados: Page<Membro>) => {
      this.page = dados;
      console.log(dados);
    });
  }

  ngOnInit() {
    this.carregarMembros();
  } */

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      observacao: ['']
    });
  }

  onSubmit() {
    if(this.formulario.invalid) {
      return;
    }

    const membro = this.formulario.value;

    this.membroService.adicionarMembro(membro)
      .subscribe({
        next: () => {
          alert('Cadastrado com sucesso!');
          this.formulario.reset();
        },
        error: () => {
          alert('Erro ao cadastrar. Por favor, tente novamente.');
        }
      });
  }

}
