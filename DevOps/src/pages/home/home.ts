import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private toast: ToastController,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
  ) {
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data.email && data.uid){
      this.toast.create({
        message: 'Vous etes bien connecter !',
        duration: 3000
      }).present();
    }
    else{
      this.toast.create({
        message: 'Mot de passe ou email invalid',
        duration: 3000
      }).present();
    }
    });
}

}
