import { Component } from '@angular/core';
import { Pessoa } from '../../core/types/types';
import { PessoaService } from '../../core/services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  imports: [FormsModule],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css'
})
export class PessoaFormComponent {
  titulo = 'Cadastro de Pessoa';

  pessoaId?: number;

  pessoa:Pessoa = {} as Pessoa;

  constructor(
    private service: PessoaService,
    private router: Router,
    private rotaAtiva: ActivatedRoute
  ){
  //Verifico se é alteração
      this.pessoaId = Number(this.rotaAtiva.snapshot.params['id']);
      if (this.pessoaId) {
        service.buscarPorId(this.pessoaId).subscribe(pessoa => {
          if (pessoa) {
            this.pessoa.id = pessoa.id;
            this.pessoa.nome = pessoa.nome;
            this.pessoa.sobrenome = pessoa.sobrenome;
            this.pessoa.dtNascimento = pessoa.dtNascimento;
          }
        });
      }
    } //Fim do contrutor
    submeter(){
      if(this.pessoaId){
        this.service.editar(this.pessoa).subscribe(() =>{
          this.router.navigate(['/pessoas'])
        })
      }else{
        this.service.incluir(this.pessoa).subscribe(()=>{
          this.router.navigate(['/pessoas'])
        })
      }
    }
}
