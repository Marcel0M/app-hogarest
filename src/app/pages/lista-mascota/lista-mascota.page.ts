import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';




@Component({
  selector: 'app-lista-mascota',
  templateUrl: './lista-mascota.page.html',
  styleUrls: ['./lista-mascota.page.scss'],
})
export class ListaMascotaPage implements OnInit {

  id_mascota_rescatada: any;
  tipo_animal: any;
  sexo: any;
  raza: any;
  color: any;
  temperamento: any;
  tamano: any;
  foto_animal_rescatado: any;
  hogar_temporal_id_hogar: any;
  animal_id_animal: any;

  mascota_rescatadas: any = [];

  constructor(
    public _apiService: ApiService
    ) { 
    this.getMascotas();
  }

  ngOnInit() {
  }

  addMascota(){
    let data = {
      id_mascota_rescatada: this.id_mascota_rescatada,
      tipo_animal: this.tipo_animal,
      sexo: this.sexo,
      raza: this.raza,
      color: this.color,
      temperamento: this.temperamento,
      tamano: this.tamano,
      foto_animal_rescatado: this.foto_animal_rescatado,
      hogar_temporal_id_hogar: this.hogar_temporal_id_hogar,
      animal_id_animal: this.animal_id_animal,
    }

    this._apiService.addMascota(data).subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.id_mascota_rescatada = '';
      this.tipo_animal = '';
      this.sexo = '';
      this.raza = '';
      this.color = '';
      this.temperamento = '';
      this.tamano = '';
      this.foto_animal_rescatado = '';
      this.hogar_temporal_id_hogar = '';
      this.animal_id_animal = '';
      alert('SUCCESS');
      this.getMascotas();
    },(error: any) => {
      alert('ERROR');
      console.log("ERROR ===", error);
    })

  }


  //FUNCION QUE LISTA LAS MASCOTAS
  getMascotas(){
    this._apiService.getMascotas().subscribe((res:any) => {
      console.log("SUCCESS ===",res);
      this.mascota_rescatadas = res;
    },(error: any) => {
      console.log("ERROR ===",error);
    })
    
  }


  //FUNCION QUE ELIMINA UNA MASCOTA
  deleteMascota(id_mascota_rescatada){
    this._apiService.deleteMascota(id_mascota_rescatada).subscribe((res:any) => {
      console.log("BORRADO");
      this.getMascotas();
    },(err:any) => {
      console.log("ERROR")
    })

  }

}
