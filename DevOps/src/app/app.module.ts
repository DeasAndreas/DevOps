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

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AbonnementPage } from '../pages/abonnement/abonnement'
import { ProfilPage } from "../pages/profil/profil";
import { NouscontacterPage } from "../pages/nouscontacter/nouscontacter"

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FIREBASE_CONFIG } from './app.firebase.config';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    SkillComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
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
    SkillComponent

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
