import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itensCarrinho: ItemCarrinho[] = [];
  private itensSubject = new BehaviorSubject<ItemCarrinho[]>([]);

  itens$ = this.itensSubject.asObservable();

  /** Retorna os itens atuais */
  getItens(): ItemCarrinho[] {
    return [...this.itensCarrinho];
  }

  /** Adiciona um produto ao carrinho */
  adicionarItem(item: ItemCarrinho) {
    const existente = this.itensCarrinho.find(i => i.id === item.id);

    if (existente) {
      existente.quantidade += item.quantidade;
    } else {
      this.itensCarrinho.push({ ...item });
    }

    this.itensSubject.next(this.itensCarrinho);
  }

  /** Remove um item pelo ID */
  removerItem(id: number) {
    this.itensCarrinho = this.itensCarrinho.filter(i => i.id !== id);
    this.itensSubject.next(this.itensCarrinho);
  }

  /** Limpa o carrinho */
  limparCarrinho() {
    this.itensCarrinho = [];
    this.itensSubject.next(this.itensCarrinho);
  }

  /** Retorna o valor total */
  getTotal(): number {
    return this.itensCarrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  }
}
