import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import {ExpPage} from "../exp/exp"

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  tiendaRef: AngularFireList<any>;
  tienda: Observable<any[]>;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public database: AngularFireDatabase
   ) {

    this.tiendaRef = this.database.list('tienda');
    this.tienda = this.database.list('tienda').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

  click(id){
    console.log("click id: "+ id);
    this.navCtrl.push(ExpPage, {id:id});
  }

}
