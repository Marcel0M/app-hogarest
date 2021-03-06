import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';
import { Camera, CameraResultType } from '@capacitor/camera';



@Component({
  selector: 'app-registrar-mascota',
  templateUrl: './registrar-mascota.page.html',
  styleUrls: ['./registrar-mascota.page.scss'],
})
export class RegistrarMascotaPage implements OnInit {

  ruta: string = '';

  //id_mascota_rescatada: any;
  tipo_animal: any;
  sexo: any;
  raza: any;
  color: any;
  temperamento: any;
  tamano: any;
  foto_animal_rescatado: any;
  //hogar_temporal_id_hogar: any;
  //animal_id_animal: any;

  constructor(
    public _apiService: ApiService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoading();
    this.tomarFoto();
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


  async tomarFoto(){
    const image = await Camera.getPhoto({
      quality: 90,
      //allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    this.ruta = image.webPath;
  }
  

  //FUNCION QUE AGREGA UNA NUEVA MASCOTA
  addMascota(){
    let data = {
      //id_mascota_rescatada: this.id_mascota_rescatada,
      tipo_animal: this.tipo_animal,
      sexo: this.sexo,
      raza: this.raza,
      color: this.color,
      temperamento: this.temperamento,
      tamano: this.tamano,
      foto_animal_rescatado: this.foto_animal_rescatado
      //hogar_temporal_id_hogar: this.hogar_temporal_id_hogar,
      //animal_id_animal: this.animal_id_animal,
    }

    this._apiService.addMascota(data).subscribe((res:any) => {
      console.log("-------MASCOTA REGISTRADA",res);
      //this.id_mascota_rescatada = '';
      /* this.tipo_animal = '';
      this.sexo = '';
      this.raza = '';
      this.color = '';
      this.temperamento = '';
      this.tamano = '';
      this.foto_animal_rescatado = ''; */
      //this.hogar_temporal_id_hogar = '';
      //this.animal_id_animal = '';
      alert('MASCOTA REGISTRADA');
    },(error: any) => {
      //alert('ERROR');
      console.log("ERROR ===", error);
    })

  }

}
