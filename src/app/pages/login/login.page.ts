import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public navController: NavController,
    private router: Router,
    public loadingController: LoadingController
    ) { }

  ngOnInit() {
    this.presentLoading();
  }

  //FUNCION QUE CARGA PAGINA
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 1000,
      translucent: true,
      spinner: "bubbles"
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  registrate() {
    this.router.navigate(['/registrar']);
    this.navController.navigateRoot('registrar')

  }

}
