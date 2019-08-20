import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChoosesubjectsPage } from './choosesubjects.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosesubjectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChoosesubjectsPage]
})
export class ChoosesubjectsPageModule {}
