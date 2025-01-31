import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() text: string;
  @Input() actionText: string;
  @Output() close = new EventEmitter<void>();
  @Output() action = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onAction() {
    this.action.emit();
  }
}
