import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the TFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t-feed',
  templateUrl: 't-feed.html',
})
export class TFeedPage {
  @ViewChild('fileInput') fileInput;
  
    isReadyToSave: boolean;
  
    item: any;
  
    form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera, public httpServices: HttpProvider, public toastCtrl: ToastController) {
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    console.log(this.form);
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);

    let feed = {
      student_id:1,
      image_url: 'https://lh3.ggpht.com/hlTovgxuEaXykfkmd_tpiiWrwP11iux0qfiUkA5aoqFAVVVc268mzo5UujIbEbGRYJM=h900',
      message: this.form.value.name,
      type:'1'
    }

    console.log(feed);

    this.httpServices.postFeed(feed).then(res => {
      console.log(res);
      this.toastCtrl.create({
        message: 'Successfull Uploaded',
        duration: 3000
      }).present();
    }, (err) => {
      console.log(err);
    })
  }

}
