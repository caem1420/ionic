import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList, snapshotChanges } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { Vibration } from '@ionic-native/vibration';
import { database } from 'firebase';


/**
 * Generated class for the BorrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-borrar',
  templateUrl: 'borrar.html',
})
export class BorrarPage {

  tiendaRef: AngularFireList<any>;
  objeto: AngularFireList<any>;
  tienda: Observable<any[]>;
  removeid: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public database: AngularFireDatabase,
    private vibration: Vibration) {

      this.tienda = this.database.list('tienda', ref=>ref.orderByChild("id")).valueChanges();
      this.tiendaRef = this.database.list('tienda');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrarPage');
  }

  hola(){
    this.objeto= this.database.list('tienda', ref=>ref.orderByChild("id").equalTo(this.removeid));
    this.objeto.valueChanges().forEach(value=> console.log(value));
    this.objeto.remove();
    
    
  }

}
