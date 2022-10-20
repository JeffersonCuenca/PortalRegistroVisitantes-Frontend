import { Component, OnInit } from '@angular/core';
import { VisitanteService } from 'src/app/services/visitante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-visitantes',
  templateUrl: './view-visitantes.component.html',
  styleUrls: ['./view-visitantes.component.css']
})
export class ViewVisitantesComponent implements OnInit {

  visitantes: any = [

  ]

  constructor(private visitanteService: VisitanteService) { }

  ngOnInit(): void {
    this.visitanteService.listarVisitantes().subscribe(
      (dato: any) => {
        this.visitantes = dato;
        console.log(this.visitantes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al lista los visitantes', 'error');
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
            window.location.reload();
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el Visitante', 'error');
          }
        )
      }
    })
  }
}
