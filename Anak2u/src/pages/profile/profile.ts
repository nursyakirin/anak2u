import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController } from 'ionic-angular';
import { NewfeedPage } from '../newfeed/newfeed';
import { InfoPage } from '../info/info';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  prostu = this.navParams.get('prostu');
  reports ='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public httpServices: HttpProvider, public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
     let load = this.loadCtrl.create({
       content: 'Please Wait'
     });
     load.present();

     this.httpServices.getReport().subscribe(data => {
       load.dismiss();
       this.reports = data.data;
       console.log(data);
     }, (err) => {
       console.log(err);
     });
  }

  getBack(){
    this.viewCtrl.dismiss();
  }

  getNew(){
    this.modalCtrl.create(NewfeedPage).present();
  }

  getInfo(prostu){
    this.modalCtrl.create(InfoPage, {prostu:prostu}).present();
  }
}
