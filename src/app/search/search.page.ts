import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public searchTerm = ''
  public searched = false
  constructor(
    public navCtrl: NavController,
    public globals: GlobalService
  ) { }

  ngOnInit() {
  }

  close() {
    this.searchTerm = ""
  }
  
  back() {
    this.navCtrl.back()
  }

  openFilter() {
    this.globals.smallSheet.open = true
  }

  searchIt(e) {
    if (e.key === "Enter") {
      this.searched = true
    }
  }

}
