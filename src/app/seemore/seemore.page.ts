import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seemore',
  templateUrl: './seemore.page.html',
  styleUrls: ['./seemore.page.scss'],
})
export class SeemorePage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back()
  }

}
