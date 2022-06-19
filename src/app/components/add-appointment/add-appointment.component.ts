import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/Doctor';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  doctors : Doctor[]
  AppointmentForm  : FormGroup
  constructor(private patientservices : PatientService) {
    this.patientservices.getdoctor().subscribe(data => {
    this.doctors = data;
  })
  }
  ngOnInit(): void {
    this.AppointmentForm = new FormGroup({
      doctor : new  FormControl('' , [Validators.required]),
      date : new FormControl('' , [Validators.required]),
      time : new FormControl('' , [Validators.required])
       });
  }

  OnFormSubmit(){
  
    console.log(this.AppointmentForm.value);

  }

}
