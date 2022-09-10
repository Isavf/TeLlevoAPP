import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-chofer',
  templateUrl: './index-chofer.page.html',
  styleUrls: ['./index-chofer.page.scss'],
})
export class IndexChoferPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Cerrar(){
    localStorage.removeItem('ingresado')
    this.router.navigate(['/home'])
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
