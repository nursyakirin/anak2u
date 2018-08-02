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
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, viewCtrl, modalCtrl, httpServices, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.httpServices = httpServices;
        this.loadCtrl = loadCtrl;
        this.prostu = this.navParams.get('prostu');
        this.reports = '';
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Please Wait'
        });
        load.present();
        this.httpServices.getReport().subscribe(function (data) {
            load.dismiss();
            _this.reports = data.data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.getBack = function () {
        this.viewCtrl.dismiss();
    };
    ProfilePage.prototype.getNew = function () {
        this.modalCtrl.create(NewfeedPage).present();
    };
    ProfilePage.prototype.getInfo = function (prostu) {
        this.modalCtrl.create(InfoPage, { prostu: prostu }).present();
    };
    ProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-profile',
            templateUrl: 'profile.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController, ModalController, HttpProvider, LoadingController])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.js.map