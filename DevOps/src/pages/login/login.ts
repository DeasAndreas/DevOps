import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth'
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth
  ) {
  }

  registerPage (){
    this.navCtrl.push(RegisterPage);
  }

 async login (user: User){
   try {
    const result = this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
    console.log(result);

    if (result){
      this.navCtrl.setRoot(HomePage);
    }
  }
  catch(e){
    console.error(e);
  }
}
}
