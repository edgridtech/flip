import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {
  public links = [
    {to: 'Airtime', class: 'selected'},
    {to: 'Coupon code', class: ''},
    {to: 'Bank card', class: ''},
  ]
  public link = 'Airtime'

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }


  pickLink(i) {
    this.links = this.links.map((link, j) => {
      return i === j ? {...link, class: 'selected'} : {...link, class: ''}
    })
    this.link = this.links[i].to
  }

  back() {
    this.navCtrl.back()
  }

}
