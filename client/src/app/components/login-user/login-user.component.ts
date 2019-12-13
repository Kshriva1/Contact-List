import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loginUser: FormGroup
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.loginUser = this.builder.group({
      email: ['',Validators.required],
      password:['',Validators.required]
    })
  }

  handleSubmit(){
    
  }

}
