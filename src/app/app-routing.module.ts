import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanchaComponent } from './components/canchas/cancha/cancha.component';


const routes: Routes = [
 
{ path:'', redirectTo: '/home' , pathMatch: 'full'}, 
{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, 
{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, 
{ path: 'canchas', loadChildren: () => import('./components/canchas/listado/listado.module').then(m => m.ListadoModule) },
{ path: 'canchas/:id' , component: CanchaComponent},
 
{ path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },

{ path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
