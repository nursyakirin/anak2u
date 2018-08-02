import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  stu = this.navParams.get('prostu');

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpServices: HttpProvider, public viewCtrl: ViewController) {
    console.log();
  }

  ionViewDidLoad() {

  }

  getBack(){
    this.viewCtrl.dismiss()
  }

}
