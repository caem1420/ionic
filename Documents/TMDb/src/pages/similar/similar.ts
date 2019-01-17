import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { InfoPage } from '../info/info';
import { SettingsProvider } from '../../providers/settings/settings';

/**
 * Generated class for the SimilarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-similar',
  templateUrl: 'similar.html',
})
export class SimilarPage {
  tipo: any;
  id: any;
  response: any;
  tipobool: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public settings : SettingsProvider) {
    this.tipo = this.navParams.get("tipo");
    this.id = this.navParams.get("ids");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimilarPage');
    this.loads();
  }

  loads() {
    if (this.tipo == "movie") {
      this.tipobool = true;
      this.http.get("https://api.themoviedb.org/3/movie/"+this.id+"/similar?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language="+this.settings.lengua+"&page=1")
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);
        });
    } else {
      this.tipobool = false;
      this.http.get("https://api.themoviedb.org/3/tv/"+this.id+"/similar?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language="+this.settings.lengua+"&page=1")
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);
        });
    }

  }

  info(id){
    this.navCtrl.push(InfoPage, {tipo: this.tipo, ids:id})
  }


}
