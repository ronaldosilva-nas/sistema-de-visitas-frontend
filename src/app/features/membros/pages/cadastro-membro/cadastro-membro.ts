import { Component, OnInit } from '@angular/core';
import { MembroService } from '../../services/membro';
import { Membro } from '../../models/membro';
import { CommonModule } from '@angular/common';
import { Page } from '../../models/page';

@Component({
  selector: 'app-cadastro-membro',
  imports: [CommonModule],
  templateUrl: './cadastro-membro.html',
  styleUrl: './cadastro-membro.css',
})
export class CadastroMembro implements OnInit{

  //membros: Membro[] = [];

  page!: Page<Membro>;

  constructor(private membroService: MembroService) {}

  carregarMembros() {
    this.membroService.listar().subscribe((dados: Page<Membro>) => {
      this.page = dados;
      console.log(dados);
    });
  }

    ngOnInit() {
      this.carregarMembros();
    }
}
