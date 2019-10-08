import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageBadRequestComponent } from './page-bad-request/page-bad-request.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [PageNotFoundComponent, PageBadRequestComponent],
  imports: [
    SharedModule
  ],
  exports: [
    PageNotFoundComponent,
    PageBadRequestComponent
  ]
})
export class PagesModule { }
