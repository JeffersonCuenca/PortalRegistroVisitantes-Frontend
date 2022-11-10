import { AreaService } from './../../../services/area.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-areas',
  templateUrl: './view-areas.component.html',
  styleUrls: ['./view-areas.component.css']
})
export class ViewAreasComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'modificar', 'eliminar'];

  areas: any = []

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    this.areaService.listarAreas().subscribe(
      (dato: any) => {
        this.areas = dato;
        console.log(this.areas);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al lista las Areas', 'error');
      }
    )
  }

  eliminarArea(id: any) {
    Swal.fire({
      title: 'Eliminar Area',
      text: '¿Estás seguro de eliminar el Area?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.areaService.eliminarArea(id).subscribe(
          (data) => {
            this.areas = this.areas.filter((area: any) => area.id != id);
            Swal.fire('Area eliminada', 'El Area ha sido eliminada de la base de datos', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el Area', 'error');
          }
        )
      }
    })
  }
}
