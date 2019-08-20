import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.page.html',
  styleUrls: ['./upgrade.page.scss'],
})
export class UpgradePage implements OnInit {
  public beforeUgrade = true
  
  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  openUpgrade() {
    this.beforeUgrade = false
  }

  back() {
    this.navCtrl.back()
  }
}
