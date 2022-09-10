import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  datos: {
    nombre: string,
  }

  constructor(private router: Router,
    public navCtrl: NavController) {
    var u = JSON.parse(localStorage.getItem('usuario'));
    this.datos = {
      nombre: u.nombre
    }
  }

  GoHome() {
    this.router.navigate(['/home'])
  }

  Cerrar() {
    localStorage.removeItem('ingresado')
    this.router.navigate(['/home'])
  }

  GoCapacidad() {
    this.router.navigate(['/capacidad-transporte'])
  }

  GoIndex_Chofer() {
    this.router.navigate(['/index-chofer'])
  }

  ngOnInit() {
  }

}
