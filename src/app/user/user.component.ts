import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  signUpUsers: any[] = [];

  signUpObj:any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    userName: '',
    passwor: ''
  };

  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }

  onSignUp(){
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem("signUpUsers", JSON.stringify(this.signUpUsers));
    this.signUpObj = {
      userName: '',
      email: '',
      password: ''
    };
  }

  onLogin() {

    const isUserExist = this.signUpUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExist != undefined)
    {
      alert('User Login Successfully');
      
    }
    else{
      alert('Incorrect Credential');
    }

  }

  registerForm = new FormGroup({
    text: new FormControl("", [Validators.required,
    Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),

  });

  registerSubmitted(){

  }

  get text(): FormControl {
    return this.registerForm.get("text") as FormControl;
  }
}
