var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ChatMePage } from '../pages/chat-me/chat-me';
import { ProfilePage } from '../pages/profile/profile';
import { NewfeedPage } from '../pages/newfeed/newfeed';
import { InfoPage } from '../pages/info/info';
import { TFeedPage } from '../pages/t-feed/t-feed';
import { TabPage } from '../pages/tab/tab';
import { StudentPage } from '../pages/student/student';
import { PaymentPage } from '../pages/payment/payment';
import { CalenderPage } from '../pages/calender/calender';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpProvider } from '../providers/http/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                AboutPage,
                ContactPage,
                HomePage,
                StudentPage,
                TabsPage,
                LoginPage,
                ChatMePage,
                ProfilePage,
                NewfeedPage,
                InfoPage,
                TFeedPage,
                TabPage,
                PaymentPage,
                CalenderPage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(MyApp),
                BrowserAnimationsModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                AboutPage,
                ContactPage,
                HomePage,
                StudentPage,
                TabsPage,
                LoginPage,
                ChatMePage,
                ProfilePage,
                NewfeedPage,
                InfoPage,
                TFeedPage,
                TabPage,
                PaymentPage,
                CalenderPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                Camera,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                HttpProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map