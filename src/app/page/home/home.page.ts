import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular'; 

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms"; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  formularioL: FormGroup;

  constructor(private router: Router,
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    
    this.formularioL = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }
  ngOnInit() {
  }

  async validarIngreso() {

    var f = this.formularioL.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.usuario == f.correo && usuario.contrasena == f.password){

      console.log('Ingresado');
      localStorage.setItem('ingresado','true');

      if(usuario.categoriaUsuario === "1"){
        this.navCtrl.navigateRoot('perfil-chofer')
      }
      if(usuario.categoriaUsuario === "2"){
        this.navCtrl.navigateRoot('estudiante')
      }

    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }


  GoHome() {
    this.router.navigate(['/home'])
  }

  GoIndex_Chofer() {
    this.router.navigate(['/index-chofer'])
  }

  GoRegistro() {
    this.router.navigate(['/registro'])
  }

  GoEstudiante() {
    this.router.navigate(['/estudiante'])
  }

  GoCapacidad() {
    this.router.navigate(['/capacidad-transporte'])
  }
}
