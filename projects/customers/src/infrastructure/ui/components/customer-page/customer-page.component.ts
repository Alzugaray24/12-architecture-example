import { Component, Input } from '@angular/core';
import { ICustomer } from '../../../../domain/model/customer.response.interface';
import { CustomerCardComponent } from '../customer-card/customer-card.component';
import { CommonModule } from '@angular/common';
import { CardBtnComponent } from 'shared';

@Component({
  selector: 'lib-customer-page',
  standalone: true,
  imports: [CustomerCardComponent, CommonModule, CardBtnComponent],
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss'],
})
export class CustomerPageComponent {
  @Input() customers: ICustomer[] = [];

  trackByFn(index: number, item: ICustomer): number {
    return item.id;
  }

  onCreateUser() {
    // Lógica para manejar la creación de un usuario
    console.log('Crear Usuario');
  }
}
