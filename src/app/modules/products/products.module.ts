import { MatCardModule } from '@angular/material/card';
import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
