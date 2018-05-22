import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CardUiComponent } from '../components/card-ui/card-ui';
import { MobileCardUiComponent } from '../components/mobile-card-ui/mobile-card-ui';
import { PanierHistComponent } from '../components/panier-hist/panier-hist';
import { PanierComponent } from '../components/panier/panier';
import { LogoAnanasComponent } from '../components/logo-ananas/logo-ananas'
import { LogoAnanasMontreDuDoigtComponent } from '../components/logo-ananas-montre-du-doigt/logo-ananas-montre-du-doigt'
import { PricingComponent } from '../components/pricing/pricing'
import { SkillComponent } from "../components/skill/skill";
import { PortfolioComponent } from "../components/portfolio/portfolio"

import { AbonnementPage } from '../pages/abonnement/abonnement'
import { ProfilPage } from "../pages/profil/profil";
import { NouscontacterPage } from "../pages/nouscontacter/nouscontacter"

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FIREBASE_CONFIG } from './app.firebase.config';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProfilPage,
    NouscontacterPage,
    CardUiComponent,
    PanierHistComponent,
    PanierComponent,
    MobileCardUiComponent,
    RegisterPage,
    LoginPage,
    LogoAnanasComponent,
    LogoAnanasMontreDuDoigtComponent,
    PricingComponent,
    AbonnementPage,
    SkillComponent,
    PortfolioComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProfilPage,
    NouscontacterPage,
    CardUiComponent,
    PanierHistComponent,
    PanierComponent,
    MobileCardUiComponent,
    RegisterPage,
    LoginPage,
    LogoAnanasComponent,
    LogoAnanasMontreDuDoigtComponent,
    PricingComponent,
    AbonnementPage,
    SkillComponent,
    PortfolioComponent

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
