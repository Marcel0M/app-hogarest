import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModiMascotaPageRoutingModule } from './modi-mascota-routing.module';

import { ModiMascotaPage } from './modi-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModiMascotaPageRoutingModule
  ],
  declarations: [ModiMascotaPage]
})
export class ModiMascotaPageModule {}
