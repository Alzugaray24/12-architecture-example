import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-main-layout',
  imports: [NavComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  navItems = [
    { label: 'Lista de Clientes', route: '/customers' },
    { label: 'Crear Cliente', route: '/customers/create' },
    { label: 'Editar Cliente', route: '/customers/edit' },
    { label: 'Eliminar Cliente', route: '/customers/delete' },
  ];
}
