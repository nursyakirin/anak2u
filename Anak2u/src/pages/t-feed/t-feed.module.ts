import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TFeedPage } from './t-feed';

@NgModule({
  declarations: [
    TFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(TFeedPage),
  ],
})
export class TFeedPageModule {}
