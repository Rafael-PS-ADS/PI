import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pessoa/login', component: PessoaLoginComponent},
    {path: 'pessoas', component:PessoaListagemComponent},
    {path: 'pessoas/incluir', component:PessoaFormComponent}
];