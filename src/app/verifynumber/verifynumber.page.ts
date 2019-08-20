import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verifynumber',
  templateUrl: './verifynumber.page.html',
  styleUrls: ['./verifynumber.page.scss'],
})
export class VerifynumberPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back()
  }

}
