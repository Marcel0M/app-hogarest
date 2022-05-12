import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { ListaMascotaPage } from './lista-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            ComponentsModule],//importar para ion-loading
  exports: [RouterModule],
})
export class ListaMascotaPageRoutingModule {}
