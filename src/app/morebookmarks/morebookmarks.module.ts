import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MorebookmarksPage } from './morebookmarks.page';

const routes: Routes = [
  {
    path: '',
    component: MorebookmarksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MorebookmarksPage]
})
export class MorebookmarksPageModule {}
