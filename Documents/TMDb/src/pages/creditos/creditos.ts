import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { SettingsProvider } from '../../providers/settings/settings';

/**
 * Generated class for the CreditosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creditos',
  templateUrl: 'creditos.html',
})
export class CreditosPage {
  tipo: any;
  id: any;
  response: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public settings : SettingsProvider) {
    this.tipo = this.navParams.get("tipo");
    this.id = this.navParams.get("ids");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditosPage');
    this.loads();
  }


  loads(){
    if (this.tipo == "movie") {
      this.http.get("https://api.themoviedb.org/3/movie/" + this.id + "/credits?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language="+this.settings.lengua)
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);
          
        })
    } else if (this.tipo == "tv") {
      this.http.get("https://api.themoviedb.org/3/tv/" + this.id + "/credits?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language="+this.settings.lengua)
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);

        })
    }else{
      alert("error");
    }
  }

}
