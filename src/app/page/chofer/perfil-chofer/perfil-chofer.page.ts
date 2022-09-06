import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-chofer',
  templateUrl: './perfil-chofer.page.html',
  styleUrls: ['./perfil-chofer.page.scss'],
})
export class PerfilChoferPage implements OnInit {

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
