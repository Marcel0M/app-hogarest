import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-modi-mascota',
  templateUrl: './modi-mascota.page.html',
  styleUrls: ['./modi-mascota.page.scss'],
})
export class ModiMascotaPage implements OnInit {

  id_mascota_rescatada: any;
  tipo_animal: any;
  sexo: any;
  raza: any;
  color: any;
  temperamento: any;
  tamano: any;
  foto_animal_rescatado: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService : ApiService

  ) {
    this.route.params.subscribe((param:any) => {
      this.id_mascota_rescatada = param.id_mascota_rescatada;
      console.log(this.id_mascota_rescatada);
    })
   }

  ngOnInit() {
  }

  getMascota(id_mascota_rescatada){
    this._apiService.getMascota(id_mascota_rescatada).subscribe((res:any) => {
      console.log("CAPTURADO", res);
      let mascota_rescatada = res[0];
      this.tipo_animal = mascota_rescatada.tipo_animal;
      this.sexo = mascota_rescatada.sexo;
      this.raza = mascota_rescatada.raza;
      this.color = mascota_rescatada.color;
      this.temperamento = mascota_rescatada.temperamento;
      this.tamano = mascota_rescatada.tamano;
    },(err:any) => {
      console.log("ERROR",err);
    })
  }

  updateMascota(){
    let data = {
      tipo_animal: this.tipo_animal,
      sexo: this.sexo,
      raza: this.raza,
      color: this.color,
      temperamento: this.temperamento,
      tamano: this.tamano,
      foto_animal_rescatado: this.foto_animal_rescatado
    }

    this._apiService.updateMascota(this.id_mascota_rescatada,data).subscribe((res:any) => {
      console.log("MODIFICADO", res);
      this.router.navigateByUrl('/lista-mascota');
    },(err:any) => {
      console.log("ERROR",err);
    })
  }

}
