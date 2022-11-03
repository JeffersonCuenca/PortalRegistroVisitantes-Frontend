import Swal from 'sweetalert2';
import { VisitanteService } from './../../../services/visitante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view-visitantes',
  templateUrl: './user-view-visitantes.component.html',
  styleUrls: ['./user-view-visitantes.component.css']
})
export class UserViewVisitantesComponent implements OnInit {

  Fecha = new Date();

  currentYear = this.Fecha.getFullYear();
  currentMonth = this.Fecha.getMonth() + 1;
  currentDay = this.Fecha.getDate();

  todayDate = '';

  finalMonth: any;
  finalDay: any;

  displayedColumns: string[] = ['nombre', 'apellido', 'dni', 'area', 'fechaIngreso', 'horaIngreso', 'modificar', 'eliminar', 'registrarsalida'];
  displayedColumnsfechaHoraSalida: string[] = ['nombre', 'apellido', 'dni', 'area', 'fechaIngreso', 'horaIngreso', 'fechaSalida', 'horaSalida', 'modificar', 'eliminar'];
  
  visitantes: any = [
    
  ]

  constructor(private visitanteService: VisitanteService) {}

  ngOnInit(): void {

    if(this.currentMonth < 10) {
      this.finalMonth = "0" + this.currentMonth;
    }else{
      this.finalMonth = this.currentMonth;
    }

    if(this.currentDay < 10) {
      this.finalDay = "0" + this.currentDay;
    }else{
      this.finalDay = this.currentDay;
    }

    this.todayDate = this.currentYear + "-" + this.finalMonth + "-" + this.finalDay;

    this.visitanteService.listarVisitantes().subscribe(
      (dato: any) => {
        this.visitantes = dato;
        console.log(this.visitantes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al listar los visitantes', 'error');
      }
    )
  }

  eliminarVisitante(id: any) {
    Swal.fire({
      title: 'Eliminar Visitante',
      text: '¿Estás seguro de eliminar el Visitante?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.visitanteService.eliminarVisitante(id).subscribe(
          (data) => {
            this.visitantes = this.visitantes.filter((visitante: any) => visitante.id != id);
            Swal.fire('Visitante eliminado', 'El Visitante ha sido eliminada de la base de datos', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el Visitante', 'error');
          }
        )
      }
    })
  } 
}
