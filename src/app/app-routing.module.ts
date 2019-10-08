import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageBadRequestComponent } from './pages/page-bad-request/page-bad-request.component';

const APP_ROUTES: Routes = [
  // error page
  { path: '403', component: PageBadRequestComponent},
  { path: '404', component: PageNotFoundComponent},
  { path: '',
    redirectTo: '/404',
    pathMatch: 'full'
  },
  // others
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
