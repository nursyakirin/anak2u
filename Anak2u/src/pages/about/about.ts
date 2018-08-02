import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  prostu = '';
  reports = '';

  constructor(public navCtrl: NavController, public loadCtrl: LoadingController, public httpServices: HttpProvider, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
     let load = this.loadCtrl.create({
       content: 'Please Wait'
     });
     load.present();

     this.httpServices.getStudent().subscribe(data => {
       
       this.prostu = data.data[0];
       console.log(this.prostu);
     }, (err) => {
       console.log(err);
     });

     this.httpServices.getReport().subscribe(data => {
      load.dismiss();
      this.reports = data.data;
      console.log(this.reports);
    }, (err) => {
      load.dismiss();
      console.log(err);
    });
  }

  getInfo(prostu){
    this.modalCtrl.create(InfoPage, {prostu:prostu}).present();
  }
}
