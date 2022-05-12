import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
//import { Storage } from '@ionic/storage'; //@ionic/storage
import { NavController } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    //private storage: Storage,
    public navCtrl: NavController
    ) { 
      this.initializeApp();
  } 

  /* async ngOnInit() {
    await this.storage.create();
  } */

  initializeApp() {
    this.platform.ready().then( () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });



    /* this.storage.get('storage_xxx').then((res)=>{
      if(res == null){
        this.navCtrl.navigateRoot("/login")
      }else{
        this.navCtrl.navigateRoot("/inicio")
      }
    }); */
  }
}


