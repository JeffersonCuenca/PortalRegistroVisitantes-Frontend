import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.component.html',
  styleUrls: ['./add-usuarios.component.css']
})
export class AddUsuariosComponent implements OnInit {

  public user = {
    username : '',
    nombre : '',
    apellido : '',
    dni : '',
    correo : '',
    password : ''
  }

  constructor(private userService:UserService, private snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    /*if(this.user.username == '' || this.user.username == null){
      this.snack.open('Por favor rellene todos los campos!', 'Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }*/

    this.userService.registrarUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema!','success');
        this.router.navigate(['/admin/usuarios']);
      },(error) => {
        console.log(error);
        this.snack.open('El usuario ya existe!', 'Aceptar',{
          duration : 3000,
        });
      }
    )
  }

}
