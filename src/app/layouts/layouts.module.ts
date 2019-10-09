import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GuessLayoutComponent } from './guess-layout/guess-layout.component';

@NgModule({
  declarations: [GuessLayoutComponent],
  imports: [
    SharedModule
  ]
})
export class LayoutsModule { }
