import { Injectable } from '@angular/core';
import { Pessoa } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = 'http://localhost:3000/pessoas';

  constructor(private httpClient: HttpClient) { }

  //TODO: Preparar método para API
  listar(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.API);
  }
  buscarPorId(id: number): Observable<Pessoa | undefined> {
    return this.httpClient.get<Pessoa>(this.API + `/${id}`);
  }
  incluir(pessoa: Pessoa): Observable<Pessoa>{
    return this.httpClient.post<Pessoa>(this.API, pessoa)
  }
  editar(pessoa: Pessoa): Observable<Pessoa>{
    const url = `${this.API}/${pessoa.id}`
    return this.httpClient.put<Pessoa>(url, pessoa)
  }
    excluir(id: number): Observable<Pessoa>{
    return this.httpClient.delete<Pessoa>(this.API + `/${id}`);
  }

}
