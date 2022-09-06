import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capacidad-transporte',
  templateUrl: './capacidad-transporte.page.html',
  styleUrls: ['./capacidad-transporte.page.scss'],
})
export class CapacidadTransportePage implements OnInit {

  constructor(private router: Router) { }
  
  GoHome(){
    this.router.navigate(['/home'])
  }

  ngOnInit() {
  }

}
