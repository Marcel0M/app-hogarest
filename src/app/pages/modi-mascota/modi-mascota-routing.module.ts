import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModiMascotaPage } from './modi-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: ModiMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModiMascotaPageRoutingModule {}
