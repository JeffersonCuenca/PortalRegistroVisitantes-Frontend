import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from 'src/app/services/area.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-areas',
  templateUrl: './update-areas.component.html',
  styleUrls: ['./update-areas.component.css']
})
export class UpdateAreasComponent implements OnInit {

  constructor(private route:ActivatedRoute, private areaService:AreaService, private router:Router) { }

  id = 0;
  area:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.areaService.ListarArea(this.id).subscribe(
      (data) => {
        this.area = data;
        console.log(this.area);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public actualizarArea(){
    this.areaService.actualizarArea(this.area).subscribe(
      (data) => {
        Swal.fire('Area actualizada','El Area ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/areas']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','Area existente','error');
        console.log(error);
      }
    )
  }

}
