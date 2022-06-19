import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoctorsComponent } from 'src/app/components/doctors/doctors.component';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private matdialog : MatDialog) { }

  ngOnInit(): void {
  }

  OpenAppointmentForm()
  {
    this.matdialog.open(DoctorsComponent);
  }

}
