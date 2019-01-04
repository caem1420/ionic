import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { SignupPage } from '../signup/signup';
import { CardsPage } from "../cards/cards";
import { Vibration } from '@ionic-native/vibration';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { AdministradorPage } from "../administrador/administrador"
//import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  pass: string;
  usuariosRef: AngularFireList<any>;
  usuarios: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public database: AngularFireDatabase,
    private vibration: Vibration,
    public afAuth: AngularFireAuth
  ) {

    this.usuariosRef = this.database.list('usuarios');
    this.usuarios = this.database.list('usuarios', ref=>ref.orderByChild("email")).valueChanges();



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.usuarios.forEach(value => console.log('next', value[0]["email"]))
    .then(() => console.log('complete'), e => console.error('error', e));
  }



  public ingresar() {
    this.vibration.vibrate(100);

    // let alert1 = this.alertCtrl.create({
    //   title: "hola "+ this.email,
    //   subTitle: "bienvenido a mi primera app",
    //   buttons: ["ok"]
    // });
    // alert1.present();

    // this.usuariosRef.push({
    //    email: this.email,
    //    pass: this.pass
    //  });
    if (this.email == undefined && this.pass == undefined) {

      let alert1 = this.alertCtrl.create({
        title: "Error",
        subTitle: "Email and password canot be empty ",
        buttons: ["ok"]
      });
      alert1.present();

    } else if (this.email === "admin" && this.pass === "admin123") {
      this.navCtrl.push(AdministradorPage);

    } else {

      let ok = false;
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pass)
        .then(value => {
          let alert1 = this.alertCtrl.create({
            title: "hola " + this.email,
            subTitle: "bienvenido a mi primera app",
            buttons: [{
              text: 'Aceptar',
              handler: () => {
                this.navCtrl.push(CardsPage);
              }
            }
            ]
          });
          alert1.present();
        })
        .catch(err => {

          let alert1 = this.alertCtrl.create({
            title: "Error",
            subTitle: " " + err.message + " ",
            buttons: ["ok"]
          });
          alert1.present();


        });
      //   function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   if (errorCode === 'auth/wrong-password') {
      //     alert(errorMessage);
      //   } else {
      //     alert(errorMessage);

      //   }
      //   console.log(error);

      // });
    }
  }


  resetpass() {
    this.vibration.vibrate(100);
    this.navCtrl.push(ResetPasswordPage);
  }
  pushsingup() {
    this.vibration.vibrate(100);
    this.navCtrl.push(SignupPage);
  }


}
