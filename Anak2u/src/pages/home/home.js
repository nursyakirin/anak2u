var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { TFeedPage } from '../t-feed/t-feed';
import { HttpProvider } from '../../providers/http/http';
import { LoginPage } from '../login/login';
import { CalenderPage } from '../calender/calender';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, httpServices, loadCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.httpServices = httpServices;
        this.loadCtrl = loadCtrl;
        this.prostu = '';
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Please Wait'
        });
        load.present();
        this.httpServices.getStudent().subscribe(function (data) {
            load.dismiss();
            _this.prostu = data.data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getProfile = function (prostu) {
        this.modalCtrl.create(ProfilePage, { prostu: prostu }).present();
    };
    HomePage.prototype.getTFeed = function () {
        this.modalCtrl.create(TFeedPage).present();
    };
    HomePage.prototype.getOut = function () {
        this.navCtrl.setRoot(LoginPage);
    };
    HomePage.prototype.getCalender = function () {
        this.modalCtrl.create(CalenderPage).present();
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, ModalController, HttpProvider, LoadingController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map