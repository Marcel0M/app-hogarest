import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController, LoadingController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  nombre: string = "";
  email: string = "";
  telefono: string = "";
  contrasena: string = "";


  constructor(
    public navController: NavController,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
  }

  tryRegister(){
    if(this.nombre==""){
      this.presentToast('Tu nombre es requerido');
    }else if(this.email==""){
      this.presentToast('Tu email es requerido');
    }else if(this.telefono==""){
      this.presentToast('Tu telefono es requerido');
    }else if(this.contrasena==""){
      this.presentToast('Tu contraseña es requerida');
    }else{
      //test
      const loader = await this.loadingCtrl.create({
        message: 'Espera.....',
      });
      loader.present();

      return new Promise(resolve => {
        let body = {
          aksi: 'proses_register',
          nombre: this.nombre,
          email: this.email,
          telefono: this.telefono,
          contrasena: this.contrasena
        }
     //   this.
      })
    }
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: '',
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }
}
