import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {DiscoverPage} from "../pages/discover/discover"
import {SearchPage} from "../pages/search/search"
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SeriesPage } from '../pages/series/series';
import { InfoPage } from '../pages/info/info';
import { GeneroPage } from '../pages/genero/genero';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DiscoverPage,
    SearchPage,
    SeriesPage,
    InfoPage,
    GeneroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DiscoverPage,
    SearchPage,
    SeriesPage,
    InfoPage,
    GeneroPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
