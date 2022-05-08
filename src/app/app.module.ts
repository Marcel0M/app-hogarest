import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx'
//import { Storage } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { AccessProviders } from './providers/access-providers'

@NgModule({
  declarations: [AppComponent, MenuPrincipalComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(),
    HttpClientModule
    //Storage 
    ],
  providers: [
    StatusBar,
    SplashScreen,
    AccessProviders,
    Storage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [MenuPrincipalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
