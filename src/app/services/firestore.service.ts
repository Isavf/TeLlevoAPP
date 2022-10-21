import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private Firestore: AngularFirestore) { }
  creatDoc(){
    this.Firestore.collection('Estudiantes')
  }

  getCollection(){
    console.log('Conexion exitosa');
    this.Firestore.collection('Estudiantes').valueChanges().subscribe( (res) => {

      console.log('res -> ', res)

    });
  }
  
}
