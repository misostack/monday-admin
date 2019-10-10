import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'users', pathMatch: 'full', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'profile', pathMatch: 'full', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: '', pathMatch: 'full', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
