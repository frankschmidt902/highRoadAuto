import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forRoot(),
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
  ]
})
export class GeneralModule { }
