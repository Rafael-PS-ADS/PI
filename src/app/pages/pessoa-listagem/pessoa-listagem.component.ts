import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../core/services/pessoa.service';
import { Pessoa } from '../../core/types/types';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-pessoa-listagem',
    imports: [RouterModule],
    templateUrl: './pessoa-listagem.component.html',
    styleUrl: './pessoa-listagem.component.css'
})
export class PessoaListagemComponent implements OnInit{

    listaPessoas:Pessoa[]=[];

    constructor(private service:PessoaService) {}

    ngOnInit(): void {
        this.listaPessoas = this.service.listar();
    }

}