import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { IonicStorageModule } from '@ionic/storage';
import { configuration } from "src/app/admin/configuration";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    IonicStorageModule.forRoot()
,    AppRoutingModule, BrowserAnimationsModule,
    HttpClientModule
],
  providers: [
    StatusBar,
    SplashScreen,
    configuration,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseAnalytics
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
