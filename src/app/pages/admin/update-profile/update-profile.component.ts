import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute, private usuarioService:UserService, private router:Router) { }

  username = ' ';
  user:any;

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.usuarioService.ListarUsuario(this.username).subscribe(
      (data) => {
        this.user = data;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public actualizarUsuario(){
    this.usuarioService.actualizarUsuario(this.user).subscribe(
      (data) => {
        Swal.fire('Usuario actualizado','El Usuario ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/profile']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','Usuario existente','error');
        console.log(error);
      }
    )
  }

  public actualizarContrasenia(){
    this.usuarioService.actualizarContrasenia(this.user).subscribe(
      (data) => {
        Swal.fire('Contraseña actualizada','La contraseña ha sido actualizada con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/profile']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','Error de contraseña','error');
        console.log(error);
      }
    )
  }

}
