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
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
    };
    PaymentPage.prototype.getBack = function () {
        this.viewCtrl.dismiss();
    };
    PaymentPage.prototype.getPaid = function () {
        this.toastCtrl.create({
            message: 'Successfully Paid',
            duration: 3000
        }).present();
        this.viewCtrl.dismiss();
    };
    PaymentPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-payment',
            templateUrl: 'payment.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController, ToastController])
    ], PaymentPage);
    return PaymentPage;
}());
export { PaymentPage };
//# sourceMappingURL=payment.js.map