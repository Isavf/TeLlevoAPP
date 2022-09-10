import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

var comparacion = JSON.parse(localStorage.getItem('usuario'));

@Injectable({
  providedIn: 'root'
})

export class NoIngresadoGuard implements CanActivate {

  constructor(public navCtrl: NavController) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('ingresado')) {

      if (comparacion.categoriaUsuario === "2") {
        this.navCtrl.navigateRoot('estudiante')

      } if (comparacion.categoriaUsuario === "1") {

        this.navCtrl.navigateRoot('perfil-chofer')
      } 
      return false;
    } else {
      return true;
    }
  }

}
