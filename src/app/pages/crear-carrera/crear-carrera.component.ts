import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioCarrera } from 'src/app/model/Form-model';
import { FormService } from '../../../service/form.service';
import { Formulario } from 'src/app/domain/forms';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-crear-carrera',
  templateUrl: './crear-carrera.component.html',
  styleUrls: ['./crear-carrera.component.scss']
})
export class CrearCarreraComponent {

  formulario: Formulario = new Formulario();

  nombre: string = '';
  modalidad: string = '';
  ciclos: string = '';

  constructor(private FormService: FormService, private router: Router) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params);
      this.formulario = new Formulario();
      this.formulario = params['formulario'];
    }
  }

  guardar() {
    const myId = uuid();

    const valores: FormularioCarrera = {
      id: myId,
      nombre: this.nombre,
      modalidad: this.modalidad,
      ciclos: this.ciclos,
    };
    console.log(`${this.nombre} ${this.modalidad} ${this.ciclos}`);
    console.log(valores);

    let carreras = [];
    if (localStorage.getItem('carreras') === null) {
      carreras = [];
      carreras.push(valores);
      localStorage.setItem('carreras', JSON.stringify(carreras));
    } else {
      carreras = JSON.parse(localStorage.getItem('carreras')!);
      carreras.push(valores);
      localStorage.setItem('carreras', JSON.stringify(carreras));
    }
    this.limpiarCampos();
  }

  limpiarCampos() {
    this.nombre = '';
    this.modalidad = '';
    this.ciclos = '';
  }
}
