import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public empty = false

  constructor(
    public globals: GlobalService
  ) {}


  openSheet() {
    this.globals.actionsheet.open = true
  }

}
