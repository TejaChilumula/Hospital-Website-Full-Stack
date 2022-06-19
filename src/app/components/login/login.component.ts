import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }
  UserForm : FormGroup;
  errMsg : string = '';
  // username : string;
  // password : string;
  ngOnInit(): void {

    this.UserForm = new FormGroup({
      username : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),

    });
  }
  OnFormSubmit()
  {
    if(this.UserForm.value.username === 'harry' && this.UserForm.value.password === 'potter')
    {
         localStorage.setItem("username" , this.UserForm.value.username);
         localStorage.setItem("loggedIn" , "true");
         this.router.navigateByUrl("/");
         console.log('successfully');
    }
    else{
        this.errMsg = "Invalid Credentials";
    }
  }
}
