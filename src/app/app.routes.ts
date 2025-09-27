import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pessoa/login', component: PessoaLoginComponent}
];