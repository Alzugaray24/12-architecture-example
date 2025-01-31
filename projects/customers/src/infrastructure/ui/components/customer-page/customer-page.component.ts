import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ICustomer } from '../../../../domain/model/customer.response.interface';
import { CustomerCardComponent } from '../customer-card/customer-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-customer-page',
  imports: [CustomerCardComponent, CommonModule],
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.scss',
})
export class CustomerPageComponent implements OnInit {
  @Input() customers: ICustomer[] = [];

  ngOnInit() {
    console.log('CustomerPageComponent initialized', this.customers);
  }
}
