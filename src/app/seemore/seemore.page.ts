import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-seemore',
  templateUrl: './seemore.page.html',
  styleUrls: ['./seemore.page.scss'],
})
export class SeemorePage implements OnInit {
  public flips: any;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public store: Store<AppState>,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    let selectedSubject = this.router.url.split('/')[2] 
    this.store.select('flips').subscribe(flips => {
      console.log(flips)
      this.flips = flips.flips.find(subject => subject.subject === selectedSubject).flips
      console.log(this.flips)
    })
  }

  getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

  back() {
    this.navCtrl.back()
  }

}
