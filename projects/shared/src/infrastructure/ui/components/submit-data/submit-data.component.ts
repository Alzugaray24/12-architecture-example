import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './submit-data.component.html',
  styleUrls: ['./submit-data.component.scss'],
})
export class SubmitDataComponent {
  @Input() action: 'create' | 'update' | 'delete' | 'list';
}
