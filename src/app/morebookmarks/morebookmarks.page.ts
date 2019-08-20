import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-morebookmarks',
  templateUrl: './morebookmarks.page.html',
  styleUrls: ['./morebookmarks.page.scss'],
})
export class MorebookmarksPage implements OnInit {
  public links = [
    {to: 'All', class: 'selected'},
    {to: 'Currently reading', class: ''},
    {to: 'Finished', class: ''},
  ]
  public empty = false;
  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back()
  }

  pickLink(i) {
    this.links = this.links.map((link, j) => {
      return i === j ? {...link, class: 'selected'} : {...link, class: ''}
    })
    i === 0 ? this.empty = false : this.empty = true
  }

}
