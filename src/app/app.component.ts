import { Component } from '@angular/core';

import { Platform, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './global.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import * as flipAactions from '../store/actions/flips.actions'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public beginner = true
  public intermediate = false
  public advanced = false
  public counter = 1
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public globals: GlobalService,
    private sanitizer: DomSanitizer,
    public store: Store<AppState>,
    public navCtrl: NavController,
    public toastController: ToastController,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribe(() => {
        document.addEventListener('backbutton', (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (this.globals.actionsheet.open) {
            this.closeSheet()
          } else if (this.router.url.includes('/tabs') && this.counter === 1 ) {
            this.counter = 2
            this.presentToast()
          } else {
            this.navCtrl.pop()
          }
        }, false);
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.store.dispatch(new flipAactions.deleteFlip([
        {
          title: 'String',
          text: 'String',
          paid: false,
          banner: 'String',
          subject:'English',
          isBookmarked: false,
          description: ' Something simple',
          id: '123',
          longDesc: 'lorem',
          level: ''
        }
      ]))
    });
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Click again to logout.',
      duration: 3000
    });
    toast.present();
  }


  getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }


  closeSheet(){
    this.globals.actionsheet.open = this.globals.smallSheet.open = false
  }

  checked(e) {
    e.detail.checked ? console.log('checked') : console.log('not checked')
  }

  swiped(e) {
    console.log(e)
  }
}
