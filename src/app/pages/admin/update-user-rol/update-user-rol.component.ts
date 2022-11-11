import { UserRolService } from 'src/app/services/user-rol.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-update-user-rol',
  templateUrl: './update-user-rol.component.html',
  styleUrls: ['./update-user-rol.component.css']
})
export class UpdateUserRolComponent implements OnInit {

  usuarios: any = [];
  roles: any = [];

  id = 0;
  usuarioRol:any;

  constructor(private route:ActivatedRoute, private userRolService:UserRolService, private rolService:RolService, private userService:UserService, private router:Router) { }

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
    this.id = this.route.snapshot.params['id'];
    this.userRolService.ListarUsuarioRol(this.id).subscribe(
      (data) => {
        this.usuarioRol = data;
        console.log(this.usuarioRol);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public actualizarUsuarioRol(){
    this.userRolService.actualizarUsuarioRol(this.usuarioRol).subscribe(
      (data) => {
        Swal.fire('Usuario Rol actualizada','El Usuario rol ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/usuariosroles']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','Usuario Rol existente','error');
        console.log(error);
      }
    )
  }

}
