import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { RegistrarPage } from './registrar.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), 
            ComponentsModule],
  exports: [RouterModule],
})
export class RegistrarPageRoutingModule {}
