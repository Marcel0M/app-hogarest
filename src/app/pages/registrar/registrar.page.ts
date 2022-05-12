import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController} from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

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
  disabledButton;


  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders
    ) { }

ngOnInit() {
  this.presentLoading(); 
  }

  //FUNCION QUE CARGA PAGINA
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
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

  ionViewDidEnter(){
    this.disabledButton = false;
  }

  async tryRegister(){
    if(this.nombre=="")
    {
      this.presentToast('Tu nombre es requerido');
    }else if(this.email=="")
    {
      this.presentToast('Tu email es requerido');
    }else if(this.telefono=="")
    {
      this.presentToast('Tu telefono es requerido');
    }else if(this.contrasena=="")
    {
      this.presentToast('Tu contraseña es requerida');
    }else{
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Espera.....',
      });

      loader.present();  

      return new Promise(resolve => {
        let body = {
          aksi: 'proses_register',
          email: this.email,
          telefono: this.telefono,
          nombre: this.nombre,
          contrasena: this.contrasena
        }
         this.accsPrvds.postData(body, 'proses_api.php').subscribe((res: any)=>{
          if(res.success==true){
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
            this.router.navigate(['/login']);
          }else{
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
          }
        },(err)=>{
            loader.dismiss();
            this.disabledButton = false;
            this.presentAlert('Timeout');
        });
      });
    }
  }

  async presentToast(a) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(a) {
    const alert = await this.alertCtrl.create({
      //cssClass: 'my-custom-class',
      header: a,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cerrar',
          //cssClass: 'secondary',
          //id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            // accion
          }
        }, {
          text: 'Intenta denuevo',
          id: 'confirm-button',
          handler: () => {
            //console.log('Confirm Okay');
            this.tryRegister();
          }
        }
      ]
    });

    await alert.present();
  }

}
