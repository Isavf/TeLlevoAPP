import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})

export class CrearViajePage implements OnInit {

  FormularioViaje: FormGroup;

  constructor(private router: Router,
    /*public fb: FormBuilder,*/
    public alertController: AlertController,
    public navCtrl: NavController) {
    /*
    this.FormularioViaje = this.fb.group({
      'origen': new FormControl("", Validators.required),
      'destino': new FormControl("", Validators.required),
      'precio': new FormControl("", Validators.required),
      'encuentro': new FormControl("", Validators.required),
      'hora': new FormControl("", Validators.required),
      'cantidad': new FormControl("", Validators.required),
    });
    */
  }

  ngOnInit() {
  }
  /*
  async CreacionViaje() {

    var r = this.FormularioViaje.value;

    if (this.FormularioViaje.invalid) {
      const alert = await this.alertController.create({
        message: 'Favor de Completar los Datos',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }

    var crear = {
      origen: r.origen,
      destino: r.destino,
      precio: r.precio,
      encuentro: r.encuentro,
      hora: r.hora,
      cantidad: r.cantidad,
    }

    localStorage.setItem('registroViaje',JSON.stringify(crear));

  } */

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
