import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { SimilarPage } from '../similar/similar';
import { TrailerPage } from '../trailer/trailer';
import { SettingsProvider } from './../../providers/settings/settings';
import { CreditosPage } from '../creditos/creditos';
/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  tipo: string;
  ids: any;
  response: any;
  tipobool: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private alertCtrl: AlertController, public settings: SettingsProvider) {
    this.tipo = this.navParams.get("tipo");
    this.ids = this.navParams.get("ids");

    if(this.tipo== "movie"){
      this.tipobool = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
    this.onloads();
  }

  onloads() {
    console.log(this.tipo + this.ids)
    if (this.tipo == "movie") {
      this.http.get("https://api.themoviedb.org/3/movie/" + this.ids + "?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language="+this.settings.lengua)
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);

        })
    } else if (this.tipo == "tv") {
      this.http.get("https://api.themoviedb.org/3/tv/" + this.ids + "?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language="+this.settings.lengua)
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);

        })
    }else{
      alert("error");
    }

  }

  simila(){
    this.navCtrl.push(SimilarPage, {tipo: this.tipo, ids: this.ids})
  }

  trailer(){
    this.navCtrl.push(TrailerPage, {tipo: this.tipo, ids: this.ids})
  }

  creditos(){
    this.navCtrl.push(CreditosPage, {tipo: this.tipo, ids: this.ids})
  }






}
