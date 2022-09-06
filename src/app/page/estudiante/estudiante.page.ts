import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  constructor(private router: Router) { }

  GoHome(){
    this.router.navigate(['/home'])
  }

  GoCapacidad(){
    this.router.navigate(['/capacidad-transporte'])
  }

  GoIndex_Chofer(){
    this.router.navigate(['/index-chofer'])
  }

  ngOnInit() {
  }

}
