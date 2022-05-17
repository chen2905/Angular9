import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  LoginUser(loginForm:NgForm){
console.log(loginForm.value.emailAddressField)
console.log(loginForm.value.passwordField)
console.log(loginForm.value.termField)
console.log(loginForm.value.genderField)
console.log(loginForm.value.notesField)
  }
}
