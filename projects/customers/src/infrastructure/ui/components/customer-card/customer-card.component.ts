import { Component, Input } from '@angular/core';
import { ICustomer } from '../../../../domain/model/customer.response.interface';

@Component({
  selector: 'lib-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent {
  @Input() customer: ICustomer;
}
