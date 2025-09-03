import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  src?: string; // campo para imagem
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todosProdutos: Produto[] = [
    { id: 1, nome: 'Arroz', descricao: 'Pacote 5kg', preco: 25, src: 'assets/arroz.jpeg' },
    { id: 2, nome: 'Feijão', descricao: 'Pacote 1kg', preco: 8.5, src: 'assets/feijao.jpeg' },
    { id: 3, nome: 'Macarrão', descricao: 'Pacote 500g', preco: 5.9, src: 'assets/macarrao.jpeg' },
    { id: 4, nome: 'Óleo', descricao: '900ml', preco: 7.2, src: 'assets/oleo.jpeg' },
    { id: 5, nome: 'Açúcar', descricao: 'Pacote 1kg', preco: 6.0, src: 'assets/acucar.jpeg' },
  ];

  destaques: Produto[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    // Pega os 2 produtos com menor preço
    this.destaques = [...this.todosProdutos]
      .sort((a, b) => a.preco - b.preco)
      .slice(0, 2);
  }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarItem({ ...produto, quantidade: 1 });
  }
}
