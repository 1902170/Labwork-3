 /*
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
 */
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
selector: 'app-root',
templateUrl: 'app.component.html'
})
export class AppComponent {
 // Adding code here
public appPage = [
{
title: 'Home',
url: '',
icon: 'home'
},
{
title: 'List',
url: '/list',
icon: 'list'
}
];

 // until here
constructor(
private platform: Platform,
private splashScreen: SplashScreen,
private statusBar: StatusBar
) {
this.initializeApp();
}
initializeApp() {
this.platform.ready().then(() => {
this.statusBar.styleDefault();
this.splashScreen.hide();
});
}
}
