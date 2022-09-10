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
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { 

      this.FormularioViaje = this.fb.group({
        'categoriaUsuario': new FormControl("", Validators.required),
        'nombre': new FormControl("", Validators.required),
        'Sede': new FormControl("", Validators.required),
        'carrera': new FormControl("", Validators.required),
        'telefono': new FormControl("", Validators.required),
        'correo': new FormControl("", Validators.required),
        'contrasena': new FormControl("", Validators.required),
  
      });
  }

  ngOnInit() {
  }
  
  CreacionViaje(){


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
