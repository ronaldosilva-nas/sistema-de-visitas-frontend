import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroMembro } from "./features/membros/pages/cadastro-membro/cadastro-membro";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroMembro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('visitas-front');
}
