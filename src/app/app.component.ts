import { Component, OnChanges , ViewChildren, QueryList, OnDestroy} from '@angular/core';

import { Platform ,IonRouterOutlet} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx'
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  
  d;
  backButtonSubscription: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    private firebaseAnalytics: FirebaseAnalytics

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
        console.log(token.name);

        await this.firebaseAnalytics.logEvent(token.name, { page: e.url })
        // .then((res: any) => this.d = res)
        // .catch((error: any) => this.d = error);
      }

    })
  }
  showSplash = true;
  
  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.backButtonEvent();
    });
    timer(5000).subscribe(() => this.showSplash = false)
  }
  backButtonEvent() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (
          this.router.url === '/home'
        ) {
        }
      });
    });
  }
}
