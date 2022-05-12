import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor(
    public http:HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
   }

   addMascota(data) {
     return this.http.post('http://localhost/proyectos/backend/create.php', data);
   }


   getMascotas() {
    return this.http.get('http://localhost/proyectos/backend/getMascotas.php');
   }
   
   
   deleteMascota(id_mascota_rescatada) {
    return this.http.delete('http://localhost/proyectos/backend/delete.php?id_mascota_rescatada='+ id_mascota_rescatada);
   }


   getMascota(id_mascota_rescatada) {
    return this.http.delete('http://localhost/proyectos/backend/getSingleMascota.php?id_mascota_rescatada='+ id_mascota_rescatada);
   }


   updateMascota(id_mascota_rescatada, data) {
    return this.http.put('http://localhost/proyectos/backend/updateMascota.php?id_mascota_rescatada='+ id_mascota_rescatada,data);
   }
}
