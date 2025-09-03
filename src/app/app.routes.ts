import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaComponent } from './components/lista/lista.component';

import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/login/login.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'login', component: LoginComponent }, // nova rota
  { path: '**', redirectTo: '' },
];
