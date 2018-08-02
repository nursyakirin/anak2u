import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = ContactPage;
  tab2Root = HomePage;
  
  constructor(public navCtrl: NavController) {

  }

  getOut(){
    this.navCtrl.setRoot(LoginPage)
  }
}
