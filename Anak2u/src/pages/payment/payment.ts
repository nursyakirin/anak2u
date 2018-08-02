import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  timeEnds: '1990-02-20';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    
  }

  getBack(){
    this.viewCtrl.dismiss();
  }

  getPaid(){
    this.toastCtrl.create({
      message: 'Successfully Paid',
      duration: 3000
    }).present();

    this.viewCtrl.dismiss();
  }

}
