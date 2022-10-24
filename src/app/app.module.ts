import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
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
import { ProfileComponent } from './pages/profile/profile.component';
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
    UpdateUsuariosComponent
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
    MatSortModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
