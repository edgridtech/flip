import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'bookmarks',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'tabs',
    redirectTo: '/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
