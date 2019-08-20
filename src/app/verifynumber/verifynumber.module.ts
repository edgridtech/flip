import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerifynumberPage } from './verifynumber.page';

const routes: Routes = [
  {
    path: '',
    component: VerifynumberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerifynumberPage]
})
export class VerifynumberPageModule {}
