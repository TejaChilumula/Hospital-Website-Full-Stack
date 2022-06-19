import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Doctor } from '../../models/Doctor';
import { PatientService } from '../../services/patient.service';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors : Doctor[];

  constructor(private patientservices :PatientService , private matdialog : MatDialog) {
    this.patientservices.getdoctor().subscribe(data => {
    this.doctors = data;
})}

  ngOnInit(): void {
  }

  onDelete(id : number | undefined)
  {
    console.log(id)

  }
  OpenAppointmentForm()
  {
    this.matdialog.open(AddDoctorComponent);
  }

}
