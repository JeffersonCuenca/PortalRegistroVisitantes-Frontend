import Swal from 'sweetalert2';
import { AreaService } from './../../../services/area.service';
import { VisitanteService } from './../../../services/visitante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update-visitantes-salida',
  templateUrl: './user-update-visitantes-salida.component.html',
  styleUrls: ['./user-update-visitantes-salida.component.css']
})
export class UserUpdateVisitantesSalidaComponent implements OnInit {

  areas: any = [];

  constructor(private route:ActivatedRoute, private visitanteService:VisitanteService, private router:Router, private areaService: AreaService) { }

  id = 0;
  visitante:any;
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.visitanteService.ListarVisitante(this.id).subscribe(
      (data) => {
        this.visitante = data;
        console.log(this.visitante);
      },
      (error) => {
        console.log(error);
      }
    )

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

  public actualizarVisitanteSalida(){
    this.visitanteService.actualizarVisitanteSalida(this.visitante).subscribe(
      (data) => {
        Swal.fire('Salida registrada','Se registro con éxito la salida','success').then(
          (e) => {
            this.router.navigate(['/user/visitantes']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','Error en el sistema','error');
        console.log(error);
      }
    )
  }

}
