import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { TabPage } from '../tab/tab';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

  animations: [
    
       //For the logo
       trigger('flyInBottomSlow', [
         state('in', style({
           transform: 'translate3d(0,0,0)'
         })),
         transition('void => *', [
           style({transform: 'translate3d(0,2000px,0'}),
           animate('2000ms ease-in-out')
         ])
       ]),
    
       //For the background detail
       trigger('flyInBottomFast', [
         state('in', style({
           transform: 'translate3d(0,0,0)'
         })),
         transition('void => *', [
           style({transform: 'translate3d(0,2000px,0)'}),
           animate('1000ms ease-in-out')
         ])
       ]),
    
       //For the login form
       trigger('bounceInBottom', [
         state('in', style({
           transform: 'translate3d(0,0,0)'
         })),
         transition('void => *', [
           animate('2000ms 200ms ease-in', keyframes([
             style({transform: 'translate3d(0,2000px,0)', offset: 0}),
             style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
             style({transform: 'translate3d(0,0,0)', offset: 1})
           ]))
         ])
       ]),
    
       //For login button
       trigger('fadeIn', [
         state('in', style({
           opacity: 1
         })),
         transition('void => *', [
           style({opacity: 0}),
           animate('1000ms 2000ms ease-in')
         ])
       ])
     ]

})
export class LoginPage {

  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";

  username = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

  }

  getTab(){
    if(this.username == 'parent' && this.password == 'abcd'){
      this.navCtrl.push(TabPage);
    }
    else if(this.username == 'teacher' && this.password == '1234'){
      this.navCtrl.push(HomePage);
    }
    else{
      this.alertCtrl.create({
        title:'Invalid Username And Password',
        message:'Please enter the correct username and password',
        buttons: ['OK']
      }).present();
    }
  }

}
