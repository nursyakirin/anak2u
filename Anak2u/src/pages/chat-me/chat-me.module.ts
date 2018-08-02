import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatMePage } from './chat-me';

@NgModule({
  declarations: [
    ChatMePage,
  ],
  imports: [
    IonicPageModule.forChild(ChatMePage),
  ],
})
export class ChatMePageModule {}
