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
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { InfoPage } from '../info/info';
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, loadCtrl, httpServices, modalCtrl) {
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.httpServices = httpServices;
        this.modalCtrl = modalCtrl;
        this.prostu = '';
        this.reports = '';
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var load = this.loadCtrl.create({
            content: 'Please Wait'
        });
        load.present();
        this.httpServices.getStudent().subscribe(function (data) {
            _this.prostu = data.data[0];
            console.log(_this.prostu);
        }, function (err) {
            console.log(err);
        });
        this.httpServices.getReport().subscribe(function (data) {
            load.dismiss();
            _this.reports = data.data;
            console.log(_this.reports);
        }, function (err) {
            load.dismiss();
            console.log(err);
        });
    };
    AboutPage.prototype.getInfo = function (prostu) {
        this.modalCtrl.create(InfoPage, { prostu: prostu }).present();
    };
    AboutPage = __decorate([
        Component({
            selector: 'page-about',
            templateUrl: 'about.html'
        }),
        __metadata("design:paramtypes", [NavController, LoadingController, HttpProvider, ModalController])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map