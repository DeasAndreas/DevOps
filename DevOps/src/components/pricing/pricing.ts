import { Component } from '@angular/core';

/**
 * Generated class for the PricingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pricing',
  templateUrl: 'pricing.html'
})
export class PricingComponent {

  text: string;

  constructor() {
    console.log('Hello PricingComponent Component');
    this.text = 'Hello World';
  }

}
