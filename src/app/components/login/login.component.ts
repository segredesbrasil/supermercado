import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string = '';

  login() {
    this.erro = '';

    if (!this.email || !this.senha) {
      this.erro = 'Por favor, preencha todos os campos.';
      return;
    }

    // Aqui você pode adicionar lógica real de autenticação
    if (this.email === 'admin@exemplo.com' && this.senha === '123456') {
      alert('Login realizado com sucesso!');
      this.email = '';
      this.senha = '';
    } else {
      this.erro = 'Email ou senha incorretos.';
    }
  }
}
