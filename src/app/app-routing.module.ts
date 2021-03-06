import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingPageModule) },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'verifynumber', loadChildren: './verifynumber/verifynumber.module#VerifynumberPageModule' },
  { path: 'choosesubjects', loadChildren: './choosesubjects/choosesubjects.module#ChoosesubjectsPageModule' },
  { path: 'seemore/:subject', loadChildren: './seemore/seemore.module#SeemorePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'morebookmarks', loadChildren: './morebookmarks/morebookmarks.module#MorebookmarksPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'upgrade', loadChildren: './upgrade/upgrade.module#UpgradePageModule' },
  { path: 'pay', loadChildren: './pay/pay.module#PayPageModule' },
  { path: 'managepayments', loadChildren: './managepayments/managepayments.module#ManagepaymentsPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'readflip', loadChildren: './readflip/readflip.module#ReadflipPageModule' },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
