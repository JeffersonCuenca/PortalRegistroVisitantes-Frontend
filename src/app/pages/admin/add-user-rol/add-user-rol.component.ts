import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';
import { UserRolService } from 'src/app/services/user-rol.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user-rol',
  templateUrl: './add-user-rol.component.html',
  styleUrls: ['./add-user-rol.component.css']
})
export class AddUserRolComponent implements OnInit {

  usuarios: any = [];
  roles: any = [];

  usuarioRol = {
    usuario: {
      id: ''
    },
    rol: {
      rolId: ''
    }
  }

  constructor(private usuarioRolService:UserRolService, private rolService:RolService, private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.listarUsuarios().subscribe(
      (dato: any) => {
        this.usuarios = dato;
        console.log(this.usuarios);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los datos', 'error');
      }
    )
    this.rolService.listarRoles().subscribe(
      (dato: any) => {
        this.roles = dato;
        console.log(this.roles);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los datos', 'error');
      }
    )
  }

  formSubmit() {
    this.usuarioRolService.registrarUsuariorol(this.usuarioRol).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Visitante guardado', 'El Visitante ha sido guardado con éxito', 'success');
        this.router.navigate(['/admin/usuarios']);
      },
      (error) => {
        Swal.fire('Error', 'Error al guardar el Visitante', 'error');
      }
    )
  }
}
