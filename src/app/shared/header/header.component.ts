import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  exibirLogo:boolean = true;
  itensMenu = [
    { label: 'Home', link:''},
    { label: 'Cadastro', link: 'pessoas/incluir'},
    { label: 'Login', link: 'pessoa/login' },
    { label: 'Sobre', link: 'sobre' },
    { label: 'Ajuda', link: 'Ajuda' },
  ]

}
