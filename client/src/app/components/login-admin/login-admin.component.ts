import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginAdmin: FormGroup
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.loginAdmin = this.builder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  handleSubmit(){
    console.log(this.loginAdmin.get('username').value);
  }

}
