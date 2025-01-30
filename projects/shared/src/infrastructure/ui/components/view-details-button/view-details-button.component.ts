import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-details-button',
  templateUrl: './view-details-button.component.html',
  styleUrls: ['./view-details-button.component.scss'],
})
export class ViewDetailsButtonComponent {
  @Input() detailsRoute: string;

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate([this.detailsRoute]);
  }
}
