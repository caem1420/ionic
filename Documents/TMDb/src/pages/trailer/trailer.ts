import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the TrailerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html',
})
export class TrailerPage {
  tipo: any;
  id: any;
  response: any;
  tipobool: boolean;
  idvideo: any;


  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public navParams: NavParams,public http: Http, private youtube: YoutubeVideoPlayer) {
    this.tipo = this.navParams.get("tipo");
    this.id = this.navParams.get("ids");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailerPage');
    this.prep();

  }

  prep(){

    if (this.tipo == "movie") {
      this.tipobool = true;
      this.http.get("https://api.themoviedb.org/3/movie/"+this.id+"/videos?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language=en-US")
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);
          if(this.response["results"][0] != undefined){
          console.log(this.response);
          this.idvideo = this.response["results"][0]["key"];
          console.log(this.idvideo)

          this.youtube.openVideo(this.idvideo);

        }else{
          console.log("Notiene video")
          var pp = this.alertCtrl.create({

            title: "Error",
            subTitle: "No tiene trailer",
            buttons: ["ok"]
          })
          pp.present();
          this.navCtrl.pop();
        }

        });


        
    } else {
      console.log("hola")
      this.tipobool = false;
      this.http.get("https://api.themoviedb.org/3/tv/"+this.id+"/videos?api_key=1e21ebd2dc402db8d2ff2ca061d96f56&language=en-US")
        .subscribe(res => {
          this.response = JSON.parse(res["_body"]);
          if(this.response["results"][0] != undefined){
          console.group(this.response);
          console.log(this.response);
          this.idvideo = this.response["results"][0]["key"];
          console.log(this.idvideo)
          
            this.youtube.openVideo(this.idvideo);

          }else{
            console.log("Notiene video")
            var pp = this.alertCtrl.create({

              title: "Error",
              subTitle: "No tiene trailer",
              buttons: ["ok"]
            })
            pp.present();
            this.navCtrl.pop();
          }

        });
      
    }

  }
}
