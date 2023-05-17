import { Component, OnInit } from '@angular/core';
import { FormularioCarrera } from 'src/app/model/Form-model';
import { FormService } from '../../../service/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-carrera',
  templateUrl: './listar-carrera.component.html',
  styleUrls: ['./listar-carrera.component.scss']
})
export class ListarCarreraComponent implements OnInit{
  // listadoFormularios: Formulario[] = [];

  listadoCarreras: FormularioCarrera[] = [];

  constructor(private FormService: FormService, private router: Router) {
    // this.listadoFormularios = FormService.getList();
    // console.log('listadoFormularios', this.listadoFormularios);
  }
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.listadoCarreras = [];
    console.log('aqui');
    const lista: FormularioCarrera[] = JSON.parse(
      localStorage.getItem('carreras')!
    );

    lista.forEach((element) => {
      this.listadoCarreras.push(element);
    });
  }
}
