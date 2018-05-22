import { Component } from '@angular/core';

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
