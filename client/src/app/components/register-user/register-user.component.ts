import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerUser: FormGroup;
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.registerUser = this.builder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:''
    },{
      validators:(form) => {
        if(form.get('password').value !== form.get('confirmPassword').value){
          form.get('confirmPassword').setErrors({passwordMatch:true})
        } else{
          form.get('confirmPassword').setErrors(null)
        }
        return null;
      }
    })
  }

  handleSubmit(){
    
  }

}
