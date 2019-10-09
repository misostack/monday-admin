import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GuessLayoutComponent } from './guess-layout/guess-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [GuessLayoutComponent, DashboardLayoutComponent],
  imports: [
    SharedModule
  ],
  exports: [
    GuessLayoutComponent,
    DashboardLayoutComponent
  ]
})
export class LayoutsModule { }
