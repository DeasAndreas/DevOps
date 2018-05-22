import { Component } from '@angular/core';

/**
 * Generated class for the SkillComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'skill',
  templateUrl: 'skill.html'
})
export class SkillComponent {

  text: string;

  constructor() {
    console.log('Hello SkillComponent Component');
    this.text = 'Hello World';
  }

}
