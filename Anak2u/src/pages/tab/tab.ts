import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { ChatMePage } from '../chat-me/chat-me'
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tab.html'
})
export class TabPage {
  
  tab1Root = AboutPage;
  tab2Root = ChatMePage;
  tab3Root = ContactPage;
  
  constructor(public navCtrl: NavController) {

  }

  getOut(){
    this.navCtrl.setRoot(LoginPage)
  }
}
