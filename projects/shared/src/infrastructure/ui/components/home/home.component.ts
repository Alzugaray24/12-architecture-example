import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cards = [
    {
      title: 'Gestión de Clientes',
      description: 'Administra la información de los clientes.',
      detailsRoute: '/customer-management',
    },
    {
      title: 'Gestión de Platos',
      description: 'Administra los platos del menú.',
      detailsRoute: '/dish-management',
    },
    {
      title: 'Gestión de Órdenes',
      description: 'Administra las órdenes de los clientes.',
      detailsRoute: '/order-management',
    },
    {
      title: 'Gestión de Menú',
      description: 'Administra el menú del restaurante.',
      detailsRoute: '/menu-management',
    },
  ];
}
