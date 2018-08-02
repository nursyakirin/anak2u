import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ChatMePage } from '../chat-me/chat-me';
import { TFeedPage } from '../t-feed/t-feed';
import { StudentPage } from '../student/student';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items = [
    {month:'December', value:'RM 1275.00', status:'pending'},
    {month:'November', value:'RM 1275.00', status:'completed'},
    {month:'October', value:'RM 1275.00', status:'completed'},
    {month:'September', value:'RM 1275.00', status:'completed'},
    {month:'August', value:'RM 1275.00', status:'completed'},
    {month:'School Trip', value:'RM 100.00', status:'completed'},
    {month:'July', value:'RM 1275.00', status:'completed'},
    {month:'June', value:'RM 1275.00', status:'completed'},
    {month:'Book purchase', value:'RM 53.00', status:'completed'},
    {month:'May', value:'RM 1275.00', status:'completed'},
    {month:'December', value:'RM 1275.00', status:'completed'},
  ];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  getChat(){
    this.modalCtrl.create(ChatMePage).present();
  }

  getTFeed(){
    this.modalCtrl.create(TFeedPage).present();
  }

  getPayment(){
    this.modalCtrl.create(StudentPage).present();
  }
}
