import { Injectable } from '@angular/core';
import { Pessoa } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  //TODO: Preparar método para API
  listar():Pessoa[]{
    return [
      {"id":1,
        "nome":"Enzo",
        "sobrenome":"Silva",
        "dtNascimento":"2005-10-01"
      },
      {"id":2,
        "nome":"Valentina",
        "sobrenome":"Santos",
        "dtNascimento":"2007-01-01"
      }
    ]
  }
}
