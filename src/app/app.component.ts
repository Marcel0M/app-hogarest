import { Component } from '@angular/core';
import { StatusBarInfo } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular'
//import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    //private splashScreen: SplashScreen,
    private statusBar: StatusBarInfo,
    private storage: Storage,
    public navCtrl: NavController
    ) { 
      this.initializeApp();
  } 

  initializeApp() {
    this.platform.ready().then( () => {
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });

    this.storage.get('storage_xxx').then((res)=>{
      if(res == null){
        this.navCtrl.navigateRoot("/login")
      }else{
        this.navCtrl.navigateRoot("/inicio")
      }
    }
    
    )
  }

}


