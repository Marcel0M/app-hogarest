import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit {

  @Input() titulo: string = '';//TITULO PAGINAS

  constructor(public navController: NavController,) { }

  ngOnInit() {

  }


  //FUNCION QUE TE LLEVA A LA PAGINA LISTA MASCOTA
  listMascota() {
    this.navController.navigateRoot('lista-mascota')
  }

  salirPerfil() {
    this.navController.navigateRoot('inicio')

  }
  


}
