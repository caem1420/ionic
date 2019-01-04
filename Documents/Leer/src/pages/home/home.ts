import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { a } from '@angular/core/src/render3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text: any;

  constructor(public navCtrl: NavController, private tts: TextToSpeech) {

  }

  click(){
    this.tts.speak(this.text).then(as=>console.log("hecho")).catch(p=>{
      console.log("error" + p);
    });
  }
  stops(){
    this.tts.stop().then(as=>console.log("hecho")).catch(p=>{
      console.log("error" + p);
    });
  }

}
