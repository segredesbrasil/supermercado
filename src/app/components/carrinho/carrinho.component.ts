import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { ItemCarrinho } from '../../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  
templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  itens: ItemCarrinho[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.carrinhoService.itens$.subscribe(itens => {
      this.itens = itens;
    });
  }

  get total(): number {
    return this.carrinhoService.getTotal();
  }

  aumentarQuantidade(item: ItemCarrinho) {
    this.carrinhoService.adicionarItem({ ...item, quantidade: 1 });
  }

  diminuirQuantidade(item: ItemCarrinho) {
    if (item.quantidade > 1) {
      this.carrinhoService.adicionarItem({ ...item, quantidade: -1 }); // decrementa usando o serviço
    }
  }

  removerItem(id: number) {
    this.carrinhoService.removerItem(id);
  }

  finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    this.carrinhoService.limparCarrinho();
  }
}
