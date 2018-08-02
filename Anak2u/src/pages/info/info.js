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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, httpServices, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpServices = httpServices;
        this.viewCtrl = viewCtrl;
        this.stu = this.navParams.get('prostu');
        console.log();
    }
    InfoPage.prototype.ionViewDidLoad = function () {
    };
    InfoPage.prototype.getBack = function () {
        this.viewCtrl.dismiss();
    };
    InfoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-info',
            templateUrl: 'info.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpProvider, ViewController])
    ], InfoPage);
    return InfoPage;
}());
export { InfoPage };
//# sourceMappingURL=info.js.map