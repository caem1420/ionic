import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { InfoPage } from '../info/info';
import { AlertController } from 'ionic-angular';
import { Title } from '@angular/platform-browser';
import { GeneroPage } from '../genero/genero';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  busqueda: any;
  tipo: any;
  response: any;
  tipobool: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  onInput() {
    console.log(this.busqueda + " " + this.tipo);
    if (this.tipo === "movie") {
      this.tipobool = true;
      this.http.get("https://api.themoviedb.org/3/search/movie?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language=en-US&query=" + this.busqueda + "&page=1&include_adult=false")
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);
        })
    }else if ( this.tipo === "tv"){
      this.tipobool = false;
      this.http.get("https://api.themoviedb.org/3/search/tv?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language=en-US&query=" + this.busqueda + "&page=1&include_adult=false")
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);
        })
    }else{
      var pp = this.alertCtrl.create({
        title: "Error",
        subTitle: "Debe seleccionar un tipo",
        buttons: ["ok"]
      })
      pp.present();
    }

  }

  info(id){
    this.navCtrl.push(InfoPage, {tipo: this.tipo, ids:id})
  }

  genero(){
    this.navCtrl.push(GeneroPage);
  }

}
