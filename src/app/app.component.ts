import { Component, OnChanges } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,

  ) {
    this.initializeApp();
    this.router.events.subscribe(async e => {
      if (e instanceof NavigationStart) {
        let token = await this.storage.get('token')
        let lastLoginTime = (new Date().getTime() - new Date(token.time).getTime()) / 8.64e7
        if (lastLoginTime >= 7) {
          await this.storage.remove(token)
          this.router.navigate(['/login'])
        }

      }

    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
