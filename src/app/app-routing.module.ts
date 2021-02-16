import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule)
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./modules/navigation/navigation.module').then(m => m.NavigationModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./modules/weather/weather.module').then(m => m.WeatherModule)
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
