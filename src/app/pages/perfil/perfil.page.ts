import { Component, OnInit } from '@angular/core';
import {  MenuController, ActionSheetController, LoadingController  } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private menu: MenuController, 
              public actionSheetController: ActionSheetController,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }

  //FUNCION QUE CARGA PAGINA
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 1500,
      translucent: true,
      spinner: "bubbles"
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
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
