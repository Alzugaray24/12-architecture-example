import { Component, Input } from '@angular/core';
import { ViewDetailsButtonComponent } from '../view-details-button/view-details-button.component';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [ViewDetailsButtonComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() detailsRoute: string;
}
