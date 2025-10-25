import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
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
  ];

}
