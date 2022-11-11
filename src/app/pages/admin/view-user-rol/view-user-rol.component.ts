import { Component, OnInit } from '@angular/core';
import { UserRolService } from 'src/app/services/user-rol.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user-rol',
  templateUrl: './view-user-rol.component.html',
  styleUrls: ['./view-user-rol.component.css']
})
export class ViewUserRolComponent implements OnInit {
  displayedColumns: string[] = ['username', 'nombre', 'apellido', 'rol', 'modificar', 'eliminar'];

  usuariosroles: any = []

  constructor(private usuarioRolService:UserRolService) { }

  ngOnInit(): void {
    this.usuarioRolService.listarUsuariosRoles().subscribe(
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

  eliminarUsuarioRol(id: any) {
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
        this.usuarioRolService.eliminarUsuarioRol(id).subscribe(
          (data) => {
            this.usuariosroles = this.usuariosroles.filter((usuariorol: any) => usuariorol.id != id);
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
