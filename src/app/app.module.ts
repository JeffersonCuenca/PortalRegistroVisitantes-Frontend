import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddUsuariosComponent } from './pages/admin/add-usuarios/add-usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewAreasComponent } from './pages/admin/view-areas/view-areas.component';
import { AddAreasComponent } from './pages/admin/add-areas/add-areas.component';
import { UpdateAreasComponent } from './pages/admin/update-areas/update-areas.component';
import { ViewVisitantesComponent } from './pages/admin/view-visitantes/view-visitantes.component';
import { AddVisitantesComponent } from './pages/admin/add-visitantes/add-visitantes.component';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { UpdateVisitantesComponent } from './pages/admin/update-visitantes/update-visitantes.component';
import { UpdateVisitantesSalidaComponent } from './pages/admin/update-visitantes-salida/update-visitantes-salida.component';
import { ViewUsuariosComponent } from './pages/admin/view-usuarios/view-usuarios.component';
import { UpdateUsuariosComponent } from './pages/admin/update-usuarios/update-usuarios.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ViewVisitantesFechasComponent } from './pages/admin/view-visitantes-fechas/view-visitantes-fechas.component';
import { MatNativeDateModule } from '@angular/material/core';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { UserViewAreasComponent } from './pages/user/user-view-areas/user-view-areas.component';
import { UserAddVisitantesComponent } from './pages/user/user-add-visitantes/user-add-visitantes.component';
import { UserViewVisitantesComponent } from './pages/user/user-view-visitantes/user-view-visitantes.component';
import { UserUpdateVisitantesComponent } from './pages/user/user-update-visitantes/user-update-visitantes.component';
import { UserUpdateVisitantesSalidaComponent } from './pages/user/user-update-visitantes-salida/user-update-visitantes-salida.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddUserRolComponent } from './pages/admin/add-user-rol/add-user-rol.component';
import { ViewUserRolComponent } from './pages/admin/view-user-rol/view-user-rol.component';
import { UpdateUserRolComponent } from './pages/admin/update-user-rol/update-user-rol.component';
import { UpdateProfileComponent } from './pages/admin/update-profile/update-profile.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserUpdateProfileComponent } from './pages/user/user-update-profile/user-update-profile.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddUsuariosComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewAreasComponent,
    AddAreasComponent,
    UpdateAreasComponent,
    ViewVisitantesComponent,
    AddVisitantesComponent,
    UpdateVisitantesComponent,
    UpdateVisitantesSalidaComponent,
    ViewUsuariosComponent,
    UpdateUsuariosComponent,
    ViewVisitantesFechasComponent,
    UserSidebar,
    UserWelcomeComponent,
    UserViewAreasComponent,
    UserAddVisitantesComponent,
    UserViewVisitantesComponent,
    UserUpdateVisitantesComponent,
    UserUpdateVisitantesSalidaComponent,
    AddUserRolComponent,
    ViewUserRolComponent,
    UpdateUserRolComponent,
    UpdateProfileComponent,
    UserProfileComponent,
    UserUpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatSortModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders, { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
