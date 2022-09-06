import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  GoHome(){
    this.router.navigate(['/home'])
  }
  GoHistorial(){
    this.router.navigate(['/index-chofer'])
  }
  GoViaje(){
    this.router.navigate(['/crear-viaje'])
  }
  GoPerfil(){
    this.router.navigate(['/perfil-chofer'])
  }

}
