import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'authorization-list', pathMatch: 'full'
  },
  {
    path: 'authorization-list',
    loadChildren: () => import('./modules/authorization-list/authorization-list.module')
      .then(m => m.AuthorizationListModule),
  },
  {
    path: 'authorization-profile',
    loadChildren: () => import('./modules/authorization-profile/authorization-profile.module')
      .then(m => m.AuthorizationProfileModule)
  },
  {
    path: '**', redirectTo: 'authorization-list'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
