import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  aberto = false;

  toggleMenu() {
    this.aberto = !this.aberto;
  }

  fecharMenu() {
    this.aberto = false;
  }
}
