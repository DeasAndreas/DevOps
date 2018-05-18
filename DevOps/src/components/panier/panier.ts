import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PanierHistComponent } from '../panier-hist/panier-hist';

@Component({
  selector: 'panier',
  templateUrl: 'panier.html'
})
export class PanierComponent {

 

  constructor( private navCtrl: NavController) {
  
  }
  openPanier(){
    this.navCtrl.push(PanierHistComponent);
  }
}
