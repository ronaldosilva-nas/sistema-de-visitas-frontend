import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membro } from '../models/membro';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root',
})
export class MembroService {
  
  private api = 'http://localhost:8080/membros';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<Page<Membro>>(this.api);
  }

  adicionarMembro(membro: Membro) {
    return this.http.post<Membro>(this.api, membro);
  }
}
