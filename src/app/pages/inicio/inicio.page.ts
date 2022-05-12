import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  ruta: string = '';

  constructor( private alertController: AlertController,
               public navController: NavController,
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

//FUNCION QUE TE LLEVA AL PERFIL
  perfil() {
    this.navController.navigateRoot('perfil')
  }

  //FUNCION PARA MOSTRAR FICHA
  async presentFicha() {
    const alert = await this.alertController.create({
      header: 'Registrar Mascota',
      inputs: [
        {
          name: 'tipo_animal',
          type: 'text',
          placeholder: 'Tipo Animal',
        },
        {
          name: 'sexo',
          type: 'text',
          placeholder: 'Sexo Animal',
        },
        {
          name: 'raza',
          type: 'text',
          placeholder: 'Raza Animal',
        },
        {
          name: 'color',
          type: 'text',
          placeholder: 'Color Animal',
        },
        {
          name: 'temperamento',
          type: 'text',
          placeholder: 'Temperamento Animal',
        },
        {
          name: 'tamano',
          type: 'text',
          placeholder: 'Tamaño Animal',
        },
        {
          name: 'direccion',
          type: 'text',
          placeholder: 'Direccion',
        },
        {
          name: 'comuna',
          type: 'text',
          placeholder: 'Comuna',
        },
        {
          name: 'region',
          type: 'text',
          placeholder: 'Region',
        },
        {
          name: 'fecha',
          type: 'date',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }

  //FUNCION PARA TOMAR UNA FOTO
  async tomarFoto(){
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri
    });
  
    this.ruta = image.webPath;
  }

}
