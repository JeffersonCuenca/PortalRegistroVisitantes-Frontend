import { LoginService } from 'src/app/services/login.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-usuarios',
  templateUrl: './view-usuarios.component.html',
  styleUrls: ['./view-usuarios.component.css']
})
export class ViewUsuariosComponent implements OnInit {
  //displayedColumns: string[] = ['username', 'nombre', 'apellido', 'dni', 'correo', 'modificar', 'eliminar'];
  displayedColumns: string[] = ['username', 'nombre', 'apellido', 'dni', 'correo', 'eliminar'];

  usuarios: any = [

  ]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.listarUsuarios().subscribe(
      (dato: any) => {
        this.usuarios = dato;
        console.log(this.usuarios);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al lista las Areas', 'error');
      }
    )
  }

  eliminarUsuario(id: any) {
    Swal.fire({
      title: 'Eliminar Usuario',
      text: '¿Estás seguro de eliminar al Usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.eliminarUsuario(id).subscribe(
          (data) => {
            this.usuarios = this.usuarios.filter((usuarios: any) => usuarios.id != id);
            Swal.fire('Usuario eliminado', 'El Usuario ha sido eliminado de la base de datos', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error al eliminar el Usuario', 'error');
          }
        )
      }
    })
  }

}
