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
    { label: 'Gestión de Usuarios', route: '/' },
    { label: 'Gestión de Platos', route: '/dishes' },
    { label: 'Gestión de Menús', route: '/menus' },
    { label: 'Gestión de Órdenes', route: '/orders' },
  ];
}
