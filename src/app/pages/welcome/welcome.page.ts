import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
//SLIDE WELCOME PAGE
  slides = [
    {
      img: 'assets/img/mascota.png',
      titulo: 'Ayuda!<br>Rescatando de las calles<br>Una mascota abandonada'
    },
    {
      img: 'assets/img/house.png',
      titulo: 'Puedes llevarlo a un<br>Hogar temporal<br>Mas cercano'
    },
    {
      img: 'assets/img/adopta.png',
      titulo: 'Adopta!<br>Entregale amor y<br>Dale un hogar definitivo'
    }
  ];

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  comenzar() {
    this.navController.navigateRoot('login')

  }

}
