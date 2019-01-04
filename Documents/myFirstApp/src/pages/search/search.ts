import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import {ExpPage} from "../exp/exp"

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

  busqueda: string;
  tiendaRef: AngularFireList<any>;
  tienda: Observable<any[]>;
  query: Observable<any[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public database: AngularFireDatabase) {

    this.tiendaRef = this.database.list('tienda');
    this.tienda = this.database.list('tienda').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onInput(){
    this.query = this.database.list('tienda', ref=>ref.orderByChild('nombre').startAt(this.busqueda).endAt(this.busqueda+"\uf8ff")).valueChanges();
    

  }

  clickid(id){

    console.log("click id: "+ id);
    this.navCtrl.push(ExpPage, {id:id});
  }

  

}
