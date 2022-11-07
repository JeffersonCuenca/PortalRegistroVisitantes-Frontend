import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { VisitanteService } from 'src/app/services/visitante.service';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-view-visitantes-fechas',
  templateUrl: './view-visitantes-fechas.component.html',
  styleUrls: ['./view-visitantes-fechas.component.css']
})
export class ViewVisitantesFechasComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'dni', 'area', 'fechaIngreso', 'horaIngreso', 'fechaSalida', 'horaSalida'];

  //visitantes!:MatTableDataSource<any>;
  visitantes: any = []

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private visitanteService: VisitanteService) {}

  ngOnInit(): void {
    this.visitanteService.listarVisitantes().subscribe(
      (dato: any) => {
        //this.visitantes = dato;
        this.visitantes = new MatTableDataSource(dato);
        this.visitantes.paginator = this.paginator;
        this.visitantes.sort = this.sort;
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
    if (this.visitantes.paginator) {
      this.visitantes.paginator.firstPage();
    }
  }

}
