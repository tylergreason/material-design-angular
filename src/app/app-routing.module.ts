import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule)
  },
  {
    path: '**',
    redirectTo: ''
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
