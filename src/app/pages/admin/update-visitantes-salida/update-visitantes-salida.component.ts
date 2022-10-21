import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from 'src/app/services/area.service';
import { VisitanteService } from 'src/app/services/visitante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-visitantes-salida',
  templateUrl: './update-visitantes-salida.component.html',
  styleUrls: ['./update-visitantes-salida.component.css']
})
export class UpdateVisitantesSalidaComponent implements OnInit {

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
            this.router.navigate(['/admin/visitantes']);
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
