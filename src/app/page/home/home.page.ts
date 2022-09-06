import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private router: Router) {}

  GoHome(){
    this.router.navigate(['/home'])
  }

  GoIndex_Chofer(){
    this.router.navigate(['/index-chofer'])
  }

  GoRegistro(){
    this.router.navigate(['/registro'])
  }

  GoEstudiante(){
    this.router.navigate(['/estudiante'])
  }

  GoCapacidad(){
    this.router.navigate(['/capacidad-transporte'])
  }
}
