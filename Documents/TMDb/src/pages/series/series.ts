import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
import { InfoPage } from '../info/info';
import { SettingsProvider } from '../../providers/settings/settings';




//youtube api AIzaSyBitCnBdsH0skpKFggW8y9TborpKCxkQH8
/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {
  response: any;
  keys: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public settings: SettingsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriesPage');
    this.onloads();
  }

  onloads() {
    this.http.get("https://api.themoviedb.org/3/tv/popular?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language="+this.settings.lengua+"&page=1")
    .subscribe(res=>{
      this.response = JSON.parse(res["_body"]);
    })
    
  }


  info(id: any){
    console.log(id)
    this.navCtrl.push(InfoPage, { tipo: "tv", ids: id});
  }

}
