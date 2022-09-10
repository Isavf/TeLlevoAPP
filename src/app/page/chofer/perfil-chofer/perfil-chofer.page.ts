import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-perfil-chofer',
  templateUrl: './perfil-chofer.page.html',
  styleUrls: ['./perfil-chofer.page.scss'],
})

export class PerfilChoferPage implements OnInit {

  datos: {
    nombre: string;
    carrera: string;
    chofer: string;
    telefono: number;
    Sede: string;
    correo: string;
  };

  constructor(private router: Router,
    navCtrl: NavController) {
    var u = JSON.parse(localStorage.getItem('usuario'));

    this.datos = {
      nombre: u.nombre,
      carrera: u.carrera,
      chofer: 'Chofer',
      telefono: u.telefono,
      Sede: u.Sede,
      correo: u.correo,
    }

  }

  ngOnInit() {
  }


  Cerrar() {
    localStorage.removeItem('ingresado')
    this.router.navigate(['/home'])
  }

  GoHome() {
    this.router.navigate(['/home'])
  }
  GoHistorial() {
    this.router.navigate(['/index-chofer'])
  }
  GoViaje() {
    this.router.navigate(['/crear-viaje'])
  }
  GoPerfil() {
    this.router.navigate(['/perfil-chofer'])
  }

}
