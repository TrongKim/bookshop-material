import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LogoutGuard } from './guard/logout.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./view/login/login.module').then(m => m.LoginModule),
    canActivate: [LogoutGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./view/register/register.module').then(m => m.RegisterModule),
    canActivate: [LogoutGuard]
  },
  {
    path: 'store',
    loadChildren: () => import('./view/store/store/store.module').then(m =>m.StoreModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'store',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
