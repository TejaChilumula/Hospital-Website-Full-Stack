import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router , private matdialog : MatDialog) { }

  ngOnInit(): void {
  }
  Navigate() {
    // this.router.navigateByUrl("login");
    this.matdialog.open(LoginComponent);
  }

}
