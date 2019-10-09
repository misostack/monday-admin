import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageBadRequestComponent } from './pages/page-bad-request/page-bad-request.component';
import { PagesModule } from './pages/pages.module';
import { LayoutsModule } from './layouts/layouts.module';
import { GuessLayoutComponent } from './layouts/guess-layout/guess-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

const APP_ROUTES: Routes = [
  // error page
  { path: '403', component: PageBadRequestComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: 'auth', component: GuessLayoutComponent, pathMatch: 'full',
    children: [
      { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
    ]
  },  
  { 
    path: '', component: DashboardLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },
  // others
  { path: '**', component: PageNotFoundComponent}  
];

@NgModule({
  imports: [
    PagesModule,
    LayoutsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
