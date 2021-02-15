import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
