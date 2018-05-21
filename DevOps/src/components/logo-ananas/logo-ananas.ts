import { Component } from '@angular/core';

/**
 * Generated class for the LogoAnanasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'logo-ananas',
  templateUrl: 'logo-ananas.html'
})
export class LogoAnanasComponent {

  text: string;

  constructor() {
    console.log('Hello LogoAnanasComponent Component');
    this.text = 'Hello World';
  }

}
