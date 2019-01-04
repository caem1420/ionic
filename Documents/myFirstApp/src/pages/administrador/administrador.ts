import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { AlertController } from 'ionic-angular';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { BorrarPage } from '../borrar/borrar';


/**
 * Generated class for the AdministradorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administrador',
  templateUrl: 'administrador.html',
})
export class AdministradorPage {

  pnombre: string;
  pdescripcion: string;
  pid: string;
  pprecio: string;


  tiendaRef: AngularFireList<any>;
  tienda: Observable<any[]>;
  idtienda: Observable<any[]>;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public database: AngularFireDatabase,
    public alertCtrl: AlertController,
    private storage: AngularFireStorage) {

    this.tienda = this.database.list('tienda').valueChanges();
    this.idtienda = this.database.list('tienda', ref=>ref.orderByChild("id")).valueChanges();
    this.tiendaRef = this.database.list('tienda');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdministradorPage');
    console.log("si");
    this.idtienda.forEach(value=>{
      console.log(value.reverse());
      let sas = parseInt(
      value[0]["id"]) + 1;
      console.log(sas);
      this.pid = sas.toString();
    });
    
  }

  registro(){
    

    this.tiendaRef.push({
      nombre: this.pnombre,
      descripcion: this.pdescripcion,
      id: this.pid,
      precio: this.pprecio
    });

    let alert1 = this.alertCtrl.create({
      title: "Exito",
      subTitle: "El producto ha sido registrado con exito",
      buttons: ["ok"]
    });
    alert1.present();
  }
  uploadFile(event) {
    const id = this.pid+".jpg"
    //Math.random().toString(36).substring(2);
    this.ref = this.storage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    console.log(event.target.files[0]["name"]);
    this.uploadProgress = this.task.percentageChanges();
  }

  borrar(){
    this.navCtrl.push(BorrarPage);
  }

  

}
