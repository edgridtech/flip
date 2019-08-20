import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingPageModule) },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'verifynumber', loadChildren: './verifynumber/verifynumber.module#VerifynumberPageModule' },
  { path: 'choosesubjects', loadChildren: './choosesubjects/choosesubjects.module#ChoosesubjectsPageModule' },
  { path: 'seemore', loadChildren: './seemore/seemore.module#SeemorePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
