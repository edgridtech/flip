import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Platform, ToastController, NavController } from '@ionic/angular';
import { reject } from 'q';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { Flip } from 'src/store/interfaces/flip.model';
import { DomSanitizer } from '@angular/platform-browser';
import  * as flipAactions from "../../store/actions/flips.actions";

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public flips: any;
  public counter = 1
  constructor(
    public globals: GlobalService,
    public platform: Platform,
    public store: Store<AppState>,
    private sanitizer: DomSanitizer,
    public router: Router,
    public navCtrl: NavController,
    public toastController: ToastController,
  ) {
    store.select('flips')
    .subscribe(data => {
      this.flips = data.flips
    })

    this.platform.backButton.subscribeWithPriority(9999, () => {
      document.addEventListener('backbutton', (event) => {
        event.preventDefault();
        if (this.globals.actionsheet.open) {
          event.stopPropagation();
          this.closeSheet()
        } else if (this.router.url === '/tabs/discover' && this.counter === 1 ) {
          this.counter += 1
          this.presentToast()
        } else {
          this.navCtrl.pop()
        }
      }, false);
    });
  }

  ngOnInit() {
    this.platform.backButton.subscribe(()=> {
      this.globals.actionsheet.open ? this.globals.actionsheet.open = false : reject()
    })
  }

  ionViewDidEnter() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Click again to logout.',
      duration: 3000
    });
    toast.present();
  }

  closeSheet(){
    this.globals.actionsheet.open = this.globals.smallSheet.open = false
  }

  getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

  openSheet(id, index) {
    let selectedSubject = this.flips[index]
    let selectedFlip = selectedSubject.flips.find(flip => flip.id === id)
    this.store.dispatch(new flipAactions.selectFlip(selectedFlip))
    this.globals.actionsheet.open = true
  }

  seeMore(subject) {
    this.router.navigateByUrl('/seemore/'+subject)
  }

  logg() {
    console.log(this.globals.actionsheet.selectedFlip)
  }
}
