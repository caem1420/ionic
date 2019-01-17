import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { SettingsProvider } from '../../providers/settings/settings';

/**
 * Generated class for the GeneroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
})
export class GeneroPage {
  tipo: any;
  tipobool: boolean;
  response: any;
  genero: any;
  generos: any;
  selectOptions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private alertCtrl: AlertController, public settings : SettingsProvider) {
    this.selectOptions = {
      title: "Seleccione",
      subTitle: "un genero",
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneroPage');
  }


  gene() {

    if (this.tipo === "movie") {
      this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language="+this.settings.lengua+"&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + this.genero)
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);
        });



    } else if (this.tipo === "tv") {
      this.http.get("https://api.themoviedb.org/3/discover/tv?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language="+this.settings.lengua+"&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + this.genero)
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);
        })
    } else {
      var pp = this.alertCtrl.create({

        title: "Error",
        subTitle: "Debe seleccionar un tipo",
        buttons: ["ok"]
      })
      pp.present();
    }
  }

  ss() {
    console.log("si " + this.tipo);


    if (this.tipo === "movie") {
      this.tipobool = true;
      this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language=en-US")
        .subscribe(res => {
          this.generos = JSON.parse(res["_body"]);
        });
    } else if (this.tipo === "tv") {
      this.tipobool = false;
      this.http.get("https://api.themoviedb.org/3/genre/tv/list?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language=en-US")
        .subscribe(res => {
          this.generos = JSON.parse(res["_body"]);
        });
    } else {
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

}
