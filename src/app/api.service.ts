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
}
