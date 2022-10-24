import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-usuarios',
  templateUrl: './view-usuarios.component.html',
  styleUrls: ['./view-usuarios.component.css']
})
export class ViewUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['username', 'nombre', 'apellido', 'dni', 'correo', 'contraseña'];

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

}
