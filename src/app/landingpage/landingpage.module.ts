import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import { LandingpageRoutingModule } from './landingpage-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingpageComponent,

  ],
  imports: [
    CommonModule,
    LandingpageRoutingModule,
    RouterModule
  ]
})
export class LandingpageModule { }
