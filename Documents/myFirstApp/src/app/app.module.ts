import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {SignupPage} from "../pages/signup/signup";
import {CardsPage} from "../pages/cards/cards"
import {TabsPage} from "../pages/tabs/tabs"
import {HomePage} from "../pages/home/home"
import {SearchPage} from "../pages/search/search"
import {ResetPasswordPage} from "../pages/reset-password/reset-password"
import {AdministradorPage} from "../pages/administrador/administrador"
import {ExpPage} from "../pages/exp/exp"
import {BorrarPage} from "../pages/borrar/borrar"
import {FormsModule} from "@angular/forms";
import { Vibration } from '@ionic-native/vibration';

const firebaseConfig = {
    apiKey: "AIzaSyBFPn8AA2EcKGNQjdW0AIv5uLeu1BdwyIc",
    authDomain: "ionic-2844c.firebaseapp.com",
    databaseURL: "https://ionic-2844c.firebaseio.com",
    projectId: "ionic-2844c",
    storageBucket: "ionic-2844c.appspot.com",
    messagingSenderId: "219777973343"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CardsPage,
    TabsPage,
    HomePage,
    SearchPage,
    ResetPasswordPage,
    AdministradorPage,
    ExpPage,
    BorrarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    CardsPage,
    TabsPage,
    HomePage,
    SearchPage,
    ResetPasswordPage,
    AdministradorPage,
    ExpPage,
    BorrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
  ]
})
export class AppModule {}
