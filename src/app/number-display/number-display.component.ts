import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-display',
  template: '<p>Número Gerado: {{ randomNumber }}</p>',
})

export class NumberDisplayComponent {
  @Input() randomNumber: number | undefined;
}
