import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AreaService } from './../../../services/area.service';
import { VisitanteService } from './../../../services/visitante.service';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add-visitantes',
  templateUrl: './user-add-visitantes.component.html',
  styleUrls: ['./user-add-visitantes.component.css']
})
export class UserAddVisitantesComponent implements OnInit {

  areas: any = [];

  visitante = {
    nombreVisitante: '',
    apellidoVisitante: '',
    dniVisitante: '',
    fechaIngreso: '',
    fechaSalida: '',
    horaIngreso: '',
    horaSalida: '',
    area: {
      id: ''
    }
  }

  constructor(private visitanteService: VisitanteService, private areaService: AreaService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.areaService.listarAreas().subscribe(
      (dato: any) => {
        this.areas = dato;
        console.log(this.areas);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los datos', 'error');
      }
    )
  }

  formSubmit() {
    if (this.visitante.nombreVisitante.trim() == '' || this.visitante.nombreVisitante == null) {
      this.snack.open("El nombre es requerido !!", '', {
        duration: 3000
      })
      return;
    }

    this.visitanteService.registrarVisitante(this.visitante).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Visitante guardado', 'El Visitante ha sido guardado con éxito', 'success');
        this.router.navigate(['/user/visitantes']);
      },
      (error) => {
        Swal.fire('Error', 'Error al guardar el Visitante', 'error');
      }
    )
  }

}
