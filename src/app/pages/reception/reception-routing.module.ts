import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionPage } from './reception.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptionPage
  },
  {
    path: 'reception-form',
    loadChildren: () => import('./reception-form/reception-form.module').then( m => m.ReceptionFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptionPageRoutingModule {}
