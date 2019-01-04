import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the ExpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exp',
  templateUrl: 'exp.html',
})
export class ExpPage {
  
  tiendaRef: AngularFireList<any>;
  tienda: Observable<any[]>;
  value: any;
  producto: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public database: AngularFireDatabase
    ) {

    this.value = navParams.get("id");
    this.tienda = this.database.list('tienda').valueChanges();
    this.tiendaRef = this.database.list('tienda');
    this.producto = this.database.list('tienda', ref=>ref.orderByChild("id").equalTo(this.value)).valueChanges();
    //object("/tienda/id/"+ this.value).snapshotChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpPage');
    console.log(this.value);
    console.log(this.producto);
  }

}
