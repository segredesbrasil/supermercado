import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { BuscaService } from '../../services/busca.service';

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  src?: string;
}

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Maçã', descricao: 'Maçã fresca', preco: 3.5, src: 'assets/maca.jpeg' },
    { id: 2, nome: 'Banana', descricao: 'Banana madura', preco: 2.0, src: 'assets/banana.jpeg' },
    { id: 3, nome: 'Leite', descricao: 'Leite integral', preco: 4.5, src: 'assets/leite.jpeg' },
    { id: 4, nome: 'Macarrão', descricao: 'Macarrão pacote', preco: 0.5, src: 'assets/macarrao.jpeg' }
  ];

  produtosFiltrados = computed(() =>
    this.produtos.filter(produto =>
      produto.nome.toLowerCase().includes(this.buscaService.searchTerm()) ||
      produto.descricao.toLowerCase().includes(this.buscaService.searchTerm())
    )
  );

  constructor(
    private carrinhoService: CarrinhoService,
    private buscaService: BuscaService
  ) {}

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarItem({ ...produto, quantidade: 1 });
    alert(`${produto.nome} foi adicionado ao carrinho!`);
  }
}
