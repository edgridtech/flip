import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { Platform } from '@ionic/angular';
import { reject } from 'q';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    public globals: GlobalService,
    public platform: Platform
  ) {}

  ngOnInit() {
    this.platform.backButton.subscribe(()=> {
      this.globals.actionsheet.open ? this.globals.actionsheet.open = false : reject()
    })
  }

  openSheet() {
    this.globals.actionsheet.open = true
  }
}
