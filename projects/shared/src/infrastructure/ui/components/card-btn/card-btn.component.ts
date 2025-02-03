import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-card-btn',
  imports: [CommonModule],
  templateUrl: './card-btn.component.html',
  styleUrls: ['./card-btn.component.scss'],
})
export class CardBtnComponent {
  @Input() action: 'create' | 'update' | 'delete' | 'list';
  @Input() entityName: string;

  get buttonText(): string {
    switch (this.action) {
      case 'create':
        return `Crear ${this.entityName}`;
      case 'update':
        return `Actualizar ${this.entityName}`;
      case 'delete':
        return `Eliminar ${this.entityName}`;
      case 'list':
        return `Listar ${this.entityName}`;
      default:
        return '';
    }
  }
}
