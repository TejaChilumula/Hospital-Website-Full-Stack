import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { LoginComponent } from './components/login/login.component';
import { PatientsComponent } from './components/patients/patients.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DoctorsComponent } from './components/doctors/doctors.component';

const routes: Routes = [
    {path : '' , component : HomeComponent},
    {path : 'addpatient' , component : AddPatientComponent},
    {path : 'login' , component : LoginComponent},
    {path : 'patients' , component : PatientsComponent},
    {path : 'doctor' , component : DoctorsComponent},
    {path : '**' , component : PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
