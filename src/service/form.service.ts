import { Injectable } from '@angular/core';
import { Formulario } from 'src/app/domain/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formularios: Formulario[] = []
  constructor() { }

  save(formulario: Formulario){
    this.formularios.push(formulario)
    console.log(this.formularios)
  }

  getList(){
    return this.formularios
  }

}
