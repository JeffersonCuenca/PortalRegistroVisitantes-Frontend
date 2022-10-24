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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
        path:'profile',
        component: ProfileComponent
      },
      {
        path : 'adduser',
        component : AddUsuariosComponent
      },
      {
        path : 'update-usuarios/:id',
        component : UpdateUsuariosComponent
      },
      {
        path : 'usuarios',
        component : ViewUsuariosComponent
      },
      {
        path : '',
        component : WelcomeComponent
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
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
