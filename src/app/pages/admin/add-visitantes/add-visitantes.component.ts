import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/services/area.service';
import { VisitanteService } from 'src/app/services/visitante.service';
import {FormControl} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-visitantes',
  templateUrl: './add-visitantes.component.html',
  styleUrls: ['./add-visitantes.component.css']
})
export class AddVisitantesComponent implements OnInit {

  areas: any = [];

  visitante = {
    nombreVisitante: '',
    apellidoVisitante: '',
    dniVisitante: '',
    fechaHoraIngreso: '',
    fechaHoraSalida: '',
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
        this.visitante = {
          nombreVisitante: '',
          apellidoVisitante: '',
          dniVisitante: '',
          fechaHoraIngreso: '',
          fechaHoraSalida: '',
          area: {
            id: ''
          }
        }
        this.router.navigate(['/admin/visitantes']);
      },
      (error) => {
        Swal.fire('Error', 'Error al guardar el Visitante', 'error');
      }
    )
  }
}
