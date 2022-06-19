import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor';
import { Patient, Patients } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';
import { MatDialog , MatDialogRef} from '@angular/material/dialog';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patient : Patients[];
  doctor : Doctor;
  doc? : string;
  page : number;
  size : number;
  num : number;
  indx : number;

  constructor(private http : HttpClient , private patientservices : PatientService , private router : Router
    , private matdialog : MatDialog) { }

  ngOnInit(): void {


    this.page = 0;
    this.size=5;
    this.num = 0;

    this.patientservices.getpatient(this.page , this.size).subscribe(data =>{
      this.indx = this.page*this.size;

      this.patient = data;
      this.num = this.patient.length;
      this.patient.forEach(element => {
          this.doc = element.doctor?.name;
          element.n = this.doc;
      });
    })

  }
  OpenAppointmentForm()
  {
    this.matdialog.open(AddAppointmentComponent);
  }

  onDelete(id? : number)
  {
   this.patientservices.deletepatient(id).subscribe(data => {
    this.patientservices.getpatient(this.page , this.size).subscribe(data =>{

      this.patient = data;
      this.patient.forEach(element => {
          this.doc = element.doctor?.name;
          element.n = this.doc;
      });
    })
   });

  }
  onEdit(id : number)
  {
    this.patientservices.pid$.next(id);
    console.log(id);
    console.log("this is pid",this.patientservices.pid$.value)
    this.router.navigateByUrl('/addpatient');
  }

  previous()
  {
    this.page--;
    this.patientservices.getpatient(this.page , this.size).subscribe(data =>{
      this.indx = this.page*this.size;
      this.patient = data;
      this.num = this.patient.length;
      this.patient.forEach(element => {
          this.doc = element.doctor?.name;
          element.n = this.doc;
      });
    })


  }
  next()
  {
    this.page++;
    this.patientservices.getpatient(this.page , this.size).subscribe(data =>{
      this.indx = this.page*this.size;
      this.patient = data;
      this.num = this.patient.length;
      this.patient.forEach(element => {
          this.doc = element.doctor?.name;
          element.n = this.doc;
      });
    })
  }


}


