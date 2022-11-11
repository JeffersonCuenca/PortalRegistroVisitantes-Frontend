import { AddUserRolComponent } from './pages/admin/add-user-rol/add-user-rol.component';
import { UserUpdateVisitantesSalidaComponent } from './pages/user/user-update-visitantes-salida/user-update-visitantes-salida.component';
import { UserUpdateVisitantesComponent } from './pages/user/user-update-visitantes/user-update-visitantes.component';
import { UserAddVisitantesComponent } from './pages/user/user-add-visitantes/user-add-visitantes.component';
import { UserViewVisitantesComponent } from './pages/user/user-view-visitantes/user-view-visitantes.component';
import { UserViewAreasComponent } from './pages/user/user-view-areas/user-view-areas.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { ViewVisitantesFechasComponent } from './pages/admin/view-visitantes-fechas/view-visitantes-fechas.component';
import { ViewUsuariosComponent } from './pages/admin/view-usuarios/view-usuarios.component';
import { UpdateUsuariosComponent } from './pages/admin/update-usuarios/update-usuarios.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AddUsuariosComponent } from './pages/admin/add-usuarios/add-usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewAreasComponent } from './pages/admin/view-areas/view-areas.component';
import { AddAreasComponent } from './pages/admin/add-areas/add-areas.component';
import { UpdateAreasComponent } from './pages/admin/update-areas/update-areas.component';
import { ViewVisitantesComponent } from './pages/admin/view-visitantes/view-visitantes.component';
import { AddVisitantesComponent } from './pages/admin/add-visitantes/add-visitantes.component';
import { UpdateVisitantesComponent } from './pages/admin/update-visitantes/update-visitantes.component';
import { UpdateVisitantesSalidaComponent } from './pages/admin/update-visitantes-salida/update-visitantes-salida.component';
import { ViewUserRolComponent } from './pages/admin/view-user-rol/view-user-rol.component';
import { UpdateUserRolComponent } from './pages/admin/update-user-rol/update-user-rol.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children:[
      {
        path : '',
        component : WelcomeComponent
      },
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path : 'add-user',
        component : AddUsuariosComponent
      },
      {
        path : 'update-usuarios/:username',
        component : UpdateUsuariosComponent
      },
      {
        path : 'usuarios',
        component : ViewUsuariosComponent
      },
      {
        path : 'areas',
        component : ViewAreasComponent
      },
      {
        path : 'add-areas',
        component : AddAreasComponent
      },
      {
        path : 'update-areas/:id',
        component : UpdateAreasComponent
      },
      {
        path : 'visitantes',
        component : ViewVisitantesComponent
      },
      {
        path : 'visitantes-porfechas',
        component : ViewVisitantesFechasComponent
      },
      {
        path : 'add-visitantes',
        component : AddVisitantesComponent
      },
      {
        path : 'update-visitantes/:id',
        component : UpdateVisitantesComponent
      },
      {
        path : 'update-visitantes-salida/:id',
        component : UpdateVisitantesSalidaComponent
      },
      {
        path : 'add-user-rol',
        component : AddUserRolComponent
      },
      {
        path : 'usuariosroles',
        component : ViewUserRolComponent
      },
      {
        path : 'update-user-rol/:id',
        component : UpdateUserRolComponent
      },
      {
        path : '**',
        component : WelcomeComponent
      },
    ]
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children:[
      {
        path : '',
        component : UserWelcomeComponent
      },
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path : 'areas',
        component : UserViewAreasComponent
      },
      {
        path : 'visitantes',
        component : UserViewVisitantesComponent
      },
      {
        path : 'add-visitantes',
        component : UserAddVisitantesComponent
      },
      {
        path : 'update-visitantes/:id',
        component : UserUpdateVisitantesComponent
      },
      {
        path : 'update-visitantes-salida/:id',
        component : UserUpdateVisitantesSalidaComponent
      },
      {
        path : '**',
        component : UserWelcomeComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
