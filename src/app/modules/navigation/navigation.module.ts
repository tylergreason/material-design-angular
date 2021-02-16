import { SharedModule } from './../../shared/shared.module';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NavigationRoutingModule
  ],
  declarations: [NavigationComponent]
})
export class NavigationModule { }
