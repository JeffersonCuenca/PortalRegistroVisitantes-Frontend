import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/services/area.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-areas',
  templateUrl: './add-areas.component.html',
  styleUrls: ['./add-areas.component.css']
})
export class AddAreasComponent implements OnInit {

  area = {
    nombreArea : ''
  }

  constructor(private areaService:AreaService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.area.nombreArea.trim() == '' || this.area.nombreArea == null){
      this.snack.open("El nombre es requerido !!",'',{
        duration:3000
      })
      return ;
    }

    this.areaService.registrarArea(this.area).subscribe(
      (dato:any) => {
        this.area.nombreArea = '';
        Swal.fire('Area agregada','El Area ha sido agregada con éxito','success');
        this.router.navigate(['/admin/areas']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Area existente','error')
      }
    )
  }
}
