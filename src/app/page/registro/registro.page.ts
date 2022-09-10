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
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  FormularioRegistro: FormGroup;

  constructor(private router: Router,
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {

    this.FormularioRegistro = this.fb.group({
      'categoriaUsuario': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required),
      'Sede': new FormControl("", Validators.required),
      'carrera': new FormControl("", Validators.required),
      'telefono': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required),

    });

  }

  async guardar(){
    var f = this.FormularioRegistro.value;

    if (this.FormularioRegistro.invalid) {
      const alert = await this.alertController.create({
        message: 'Favor de Completar los Datos',
        buttons: ['Aceptar'],
      });

      await alert.present();
      return;
    }

    console.log('Guardar')

    var usuario = {
      categoriaUsuario: f.categoriaUsuario,
      nombre: f.nombre,
      Sede: f.Sede,
      carrera: f.carrera,
      telefono: f.telefono,
      correo: f.correo,
      contrasena: f.contrasena,
    }
    
    localStorage.setItem('usuario',JSON.stringify(usuario));
    localStorage.setItem('ingresado','true');

    if(usuario.categoriaUsuario === "1"){
      this.navCtrl.navigateRoot('perfil-chofer')
    }
    if(usuario.categoriaUsuario === "2"){
      this.navCtrl.navigateRoot('estudiante')
    }
  }

  GoHome() {
    this.router.navigate(['/home'])
  }

  ngOnInit() {
  }

}
