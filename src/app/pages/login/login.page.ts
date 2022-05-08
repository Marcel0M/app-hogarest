import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public navController: NavController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  registrate() {
    this.router.navigate(['/registrar']);
    //this.navController.navigateRoot('registrar')

  }

}
