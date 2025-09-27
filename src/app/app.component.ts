import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo:string = 'Olá alunos 2';
  nome:string = 'Rafael';
  textoBotao: string = 'Clique aqui!';
  botaoDesabilitado: boolean = false;
  mensagem: string = '';

  onBotaoClicado(){
    this.mensagem = 'Você clicou no botão';
  }

  onKeyPressed(){
    this.mensagem = "Digitando o nome..."
  }
  onKeyUp(objEevento : Event) {
    const input = objEevento.target as HTMLInputElement;
    this.mensagem = `Olá ${input.value} !`;
 }

}
