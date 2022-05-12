import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { RegistrarMascotaPage } from './registrar-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            ComponentsModule],
  exports: [RouterModule],
})
export class RegistrarMascotaPageRoutingModule {}
