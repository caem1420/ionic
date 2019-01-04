import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  email: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }


  reset(){

    this.afAuth.auth.sendPasswordResetEmail(this.email)
    .then(() =>{
      this.showalert("Exito", "El correo para reestablecer la contraseña se ha enviado");
      this.navCtrl.pop();
    }) 
    .catch((error) => {
      this.showalert("ERROR", " "+ error.message+" ");
    })
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

