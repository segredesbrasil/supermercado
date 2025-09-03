import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  contato = {
    nome: '',
    email: '',
    mensagem: ''
  };

  enviarFormulario() {
    console.log('Formulário enviado:', this.contato);
    alert('Obrigado pelo contato! Em breve retornaremos.');
    this.contato = { nome: '', email: '', mensagem: '' }; // limpa o form
  }
}
