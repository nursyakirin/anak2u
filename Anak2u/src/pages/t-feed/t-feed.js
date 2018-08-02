var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the TFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TFeedPage = /** @class */ (function () {
    function TFeedPage(navCtrl, viewCtrl, formBuilder, camera, httpServices, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.httpServices = httpServices;
        this.toastCtrl = toastCtrl;
        this.form = formBuilder.group({
            profilePic: [''],
            name: ['', Validators.required],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    TFeedPage.prototype.ionViewDidLoad = function () {
    };
    TFeedPage.prototype.getPicture = function () {
        var _this = this;
        if (Camera['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    TFeedPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    TFeedPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    TFeedPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    TFeedPage.prototype.done = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
        var feed = {
            class_id: 1,
            report_picture: 'https://lh3.ggpht.com/hlTovgxuEaXykfkmd_tpiiWrwP11iux0qfiUkA5aoqFAVVVc268mzo5UujIbEbGRYJM=h900',
            message: 'Belajar '
        };
        this.httpServices.postFeed(feed).then(function (res) {
            console.log(res);
            _this.toastCtrl.create({
                message: 'Successfull Uploaded',
                duration: 3000
            }).present();
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], TFeedPage.prototype, "fileInput", void 0);
    TFeedPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-t-feed',
            templateUrl: 't-feed.html',
        }),
        __metadata("design:paramtypes", [NavController, ViewController, FormBuilder, Camera, HttpProvider, ToastController])
    ], TFeedPage);
    return TFeedPage;
}());
export { TFeedPage };
//# sourceMappingURL=t-feed.js.map