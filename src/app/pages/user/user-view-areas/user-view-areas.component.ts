import Swal from 'sweetalert2';
import { AreaService } from './../../../services/area.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view-areas',
  templateUrl: './user-view-areas.component.html',
  styleUrls: ['./user-view-areas.component.css']
})
export class UserViewAreasComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion'];

  areas: any = [

  ]

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

}
