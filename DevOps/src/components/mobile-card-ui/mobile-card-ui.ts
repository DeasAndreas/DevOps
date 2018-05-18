import { Component } from '@angular/core';

/**
 * Generated class for the MobileCardUiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mobile-card-ui',
  templateUrl: 'mobile-card-ui.html'
})
export class MobileCardUiComponent {

  text: string;

  constructor() {
    console.log('Hello MobileCardUiComponent Component');
    this.text = 'Hello World';
  }

}
