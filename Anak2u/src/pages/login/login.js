var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.logoState = "in";
        this.cloudState = "in";
        this.loginState = "in";
        this.formState = "in";
        this.username = '';
        this.password = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.getTab = function () {
        if (this.username == 'parent' && this.password == 'abcd') {
            this.navCtrl.push(TabPage);
        }
        else if (this.username == 'teacher' && this.password == '1234') {
            this.navCtrl.push(HomePage);
        }
        else {
            this.alertCtrl.create({
                title: 'Invalid Username And Password',
                message: 'Please enter the correct username and password',
                buttons: ['OK']
            }).present();
        }
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
            animations: [
                //For the logo
                trigger('flyInBottomSlow', [
                    state('in', style({
                        transform: 'translate3d(0,0,0)'
                    })),
                    transition('void => *', [
                        style({ transform: 'translate3d(0,2000px,0' }),
                        animate('2000ms ease-in-out')
                    ])
                ]),
                //For the background detail
                trigger('flyInBottomFast', [
                    state('in', style({
                        transform: 'translate3d(0,0,0)'
                    })),
                    transition('void => *', [
                        style({ transform: 'translate3d(0,2000px,0)' }),
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
                            style({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
                            style({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
                            style({ transform: 'translate3d(0,0,0)', offset: 1 })
                        ]))
                    ])
                ]),
                //For login button
                trigger('fadeIn', [
                    state('in', style({
                        opacity: 1
                    })),
                    transition('void => *', [
                        style({ opacity: 0 }),
                        animate('1000ms 2000ms ease-in')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, AlertController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map