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
import { NavController, ModalController } from 'ionic-angular';
import { ChatMePage } from '../chat-me/chat-me';
import { TFeedPage } from '../t-feed/t-feed';
import { StudentPage } from '../student/student';
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.items = [
            { month: 'December', value: 'RM 1275.00', status: 'pending' },
            { month: 'November', value: 'RM 1275.00', status: 'completed' },
            { month: 'October', value: 'RM 1275.00', status: 'completed' },
            { month: 'September', value: 'RM 1275.00', status: 'completed' },
            { month: 'August', value: 'RM 1275.00', status: 'completed' },
            { month: 'School Trip', value: 'RM 100.00', status: 'completed' },
            { month: 'July', value: 'RM 1275.00', status: 'completed' },
            { month: 'June', value: 'RM 1275.00', status: 'completed' },
            { month: 'Book purchase', value: 'RM 53.00', status: 'completed' },
            { month: 'May', value: 'RM 1275.00', status: 'completed' },
            { month: 'December', value: 'RM 1275.00', status: 'completed' },
        ];
    }
    ContactPage.prototype.getChat = function () {
        this.modalCtrl.create(ChatMePage).present();
    };
    ContactPage.prototype.getTFeed = function () {
        this.modalCtrl.create(TFeedPage).present();
    };
    ContactPage.prototype.getPayment = function () {
        this.modalCtrl.create(StudentPage).present();
    };
    ContactPage = __decorate([
        Component({
            selector: 'page-contact',
            templateUrl: 'contact.html'
        }),
        __metadata("design:paramtypes", [NavController, ModalController])
    ], ContactPage);
    return ContactPage;
}());
export { ContactPage };
//# sourceMappingURL=contact.js.map