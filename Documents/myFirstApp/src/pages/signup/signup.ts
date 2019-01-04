import { Component, TemplateRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { Vibration } from '@ionic-native/vibration';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
//import { FormControl, Validators } from '@angular/forms';




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  
  registroemail: string ;
  registrouser : string ;
  registropass : string ;
  registropasscon : string ;


  usuariosRef: AngularFireList<any>;
  usuarios: Observable<any[]>;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public alertCtrl: AlertController , 
  public database: AngularFireDatabase,
  private vibration: Vibration,
  public afAuth: AngularFireAuth
  ) {
    
    this.usuarios = this.database.list('usuarios').valueChanges();
    this.usuariosRef = this.database.list('usuarios');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  

  registro(){

    this.vibration.vibrate(100);
    if(this.registropass == this.registropasscon){

    
    this.afAuth.auth.createUserWithEmailAndPassword(this.registroemail, this.registropass)
    .then(value=>{
      this.usuariosRef.push({
        email: this.registroemail,
        username: this.registrouser,
        pass: this.registropass
      });

      this.showalert("EXITO", "Se ha registrado satisfactoriamente");

      this.navCtrl.pop();
    })
    .catch(err=>{
      this.showalert("ERROR", " "+err.message+" ");
    });

    }else{
      let alert =this.alertCtrl.create({
        title: "Error",
        subTitle: "Las contraseñas no coinciden",
        buttons: ["ok"]
      });
      alert.present();
      
    }
    
  }

 public showalert(titulo, subtitulo){
    let alert =this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      buttons: ["ok"]
    });
    alert.present();
  }

}
