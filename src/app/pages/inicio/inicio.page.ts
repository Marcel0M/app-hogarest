import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  ruta: string = '';

  constructor( private router: Router,
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
      spinner: "bubbles"
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

//FUNCIONES NAVEGACION
  registraMascota() {
    this.router.navigate(['/registrar-mascota']);
    this.navController.navigateRoot('registrar-mascota')
  }

  perfil() {
    this.router.navigate(['/perfil']);
    this.navController.navigateRoot('perfil')
  }

}
