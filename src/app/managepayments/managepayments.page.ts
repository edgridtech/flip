import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-managepayments',
  templateUrl: './managepayments.page.html',
  styleUrls: ['./managepayments.page.scss'],
})
export class ManagepaymentsPage implements OnInit {
  public paid = true
  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back()
  }


}
