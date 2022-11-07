import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { VisitanteService } from 'src/app/services/visitante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-visitantes-fechas',
  templateUrl: './view-visitantes-fechas.component.html',
  styleUrls: ['./view-visitantes-fechas.component.css']
})
export class ViewVisitantesFechasComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'dni', 'area', 'fechaIngreso', 'horaIngreso', 'fechaSalida', 'horaSalida'];
  
  //visitantes!:MatTableDataSource<any>;
  visitantes: any = []

  constructor(private visitanteService: VisitanteService) {}

  ngOnInit(): void {
    this.visitanteService.listarVisitantes().subscribe(
      (dato: any) => {
        //this.visitantes = dato;
        this.visitantes = new MatTableDataSource(dato);
        console.log(this.visitantes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al listar los visitantes', 'error');
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.visitantes.filter = filterValue.trim().toLowerCase();
  }

}
