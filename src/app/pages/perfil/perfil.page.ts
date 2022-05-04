import { Component, OnInit } from '@angular/core';
import {  MenuController, ActionSheetController  } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private menu: MenuController, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

   async handleButtonClick() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Avatar',
      buttons: [
        { text: 'Ver Avatar', icon: 'heart',},
        { text: 'Subir Avatar', icon: 'share' },
        { text: 'Eliminar Avatar', role: 'destructive', icon: 'trash' },
        { text: 'Cerrar', role: 'cancel'  },
      ],
    });

    await actionSheet.present();
  }

}
