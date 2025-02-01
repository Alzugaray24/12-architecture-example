import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from '../../../../domain/model/customer.response.interface';
import { CardBtnComponent } from 'shared';
import { ModalComponent } from 'shared';

@Component({
  selector: 'lib-customer-card',
  imports: [CardBtnComponent],
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent {
  @Input() customer: ICustomer;

  constructor(private router: Router) {}

  onUpdate() {
    this.router.navigate(['/edit', this.customer.id]);
  }
}
