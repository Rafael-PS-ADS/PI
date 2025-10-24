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

    constructor(private service:PessoaService, private route: Router){ }

    ngOnInit(): void {

        this.service.listar().subscribe((pessoas)=>{
            this.listaPessoas = pessoas;
        });
    }
    excluir(id:number){
        if(id){
            this.service.excluir(id).subscribe(() => {
                window.location.reload()
            });
        }
    }

}