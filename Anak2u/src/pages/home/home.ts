import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { TFeedPage } from '../t-feed/t-feed';
import { HttpProvider } from '../../providers/http/http';
import { LoginPage } from '../login/login';
import { CalenderPage } from '../calender/calender';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prostu = '';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public httpServices: HttpProvider, public loadCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    
        let load = this.loadCtrl.create({
          content: 'Please Wait'
        });
        load.present();
    
        this.httpServices.getStudent().subscribe(data => {
          load.dismiss();
          this.prostu = data.data;
          console.log(data);
        }, (err) => {
          console.log(err);
        });
      }

  getProfile(prostu){
    this.modalCtrl.create(ProfilePage,{prostu:prostu}).present();
  }

  getTFeed(){
    this.modalCtrl.create(TFeedPage).present();
  }

  getOut(){
    this.navCtrl.setRoot(LoginPage)
  }

  getCalender(){
    this.modalCtrl.create(CalenderPage).present();
  }
}
