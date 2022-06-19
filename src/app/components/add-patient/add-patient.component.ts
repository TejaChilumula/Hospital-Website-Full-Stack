import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/models/Doctor';
import { Patient, Patients } from 'src/app/models/Patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit ,OnDestroy {

  PatientForm : FormGroup;
  patient : Patient;
  patients : Patients;
  successmsg : string = '';
  did : number;
  doctors : Doctor[];
  //doctor: string = 'Select Doctor';
  subscription : Subscription[] = [];
  pid: number;



  constructor(private patientservces : PatientService  , private router : Router) {
        this.patientservces.getdoctor().subscribe(data => {
          this.doctors = data;



      });

      console.log(this.doctors);

   }
   OnFormSubmit()
  {
    this.patient = new Patient();
    this.patient.name = this.PatientForm.value.name;
    this.patient.city = this.PatientForm.value.city;
    this.patient.illness = this.PatientForm.value.illness;
    //this.patient.doctor = this.PatientForm.value.doctor;
    this.did = this.PatientForm.value.doctor;
    this.patientservces.did = (this.did);
    console.log(this.patientservces.did);

    this.patientservces.postpatient(this.patient).subscribe(data => {
      this.successmsg = 'Added Patient Successfully';
      this.router.navigateByUrl('/patients')
    })
  }

  ngOnInit(): void {

     this.patients = new Patients();

     this.subscription.push(this.patientservces.pid$.subscribe(val => {
     this.pid = val;
     console.log("inside onint",val);

     if(this.pid !== 0)
     {
       this.subscription.push(  this.patientservces.fetchsinglepatient(this.pid).subscribe(data => {
        this.patients = data;
        this.PatientForm = new FormGroup({
          name : new  FormControl(this.patients.name , [Validators.required]),
          city : new FormControl(this.patients.city , [Validators.required]),
          illness : new FormControl(this.patients.illness , [Validators.required]),
          doctor : new FormControl(this.patients.doctor?.name , [Validators.required])


        });
        console.log(this.patients.doctor?.name);

    })); }}));
    // this if should be inside the subscription if not doesnt work ^^^^^^ above if ^^^^^}))
     this.PatientForm = new FormGroup({
      name : new  FormControl('' , [Validators.required]),
      city : new FormControl('' , [Validators.required]),
      illness : new FormControl('' , [Validators.required]),
      doctor : new FormControl('' , [Validators.required])
       });

  }


  ngOnDestroy() : void{
    this.patientservces.pid$.next(0);
    this.subscription.forEach(subs => subs.unsubscribe());
  }
}

