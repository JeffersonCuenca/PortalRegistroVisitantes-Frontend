import { Component, OnInit } from '@angular/core';
import { UserRolService } from 'src/app/services/user-rol.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user-rol',
  templateUrl: './view-user-rol.component.html',
  styleUrls: ['./view-user-rol.component.css']
})
export class ViewUserRolComponent implements OnInit {
  displayedColumns: string[] = ['username', 'nombre', 'apellido', 'dni', 'correo', 'rol'];

  usuariosroles: any = []

  constructor(private usuarioRolService:UserRolService) { }

  ngOnInit(): void {
    this.usuarioRolService.listarUsuariosroles().subscribe(
      (dato: any) => {
        this.usuariosroles = dato;
        console.log(this.usuariosroles);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al lista las Areas', 'error');
      }
    )
  }

}
