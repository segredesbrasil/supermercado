import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BuscaService } from '../../services/busca.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopBarComponent {
  constructor(public buscaService: BuscaService) {}

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.buscaService.searchTerm.set(input.value.toLowerCase());
  }
}
