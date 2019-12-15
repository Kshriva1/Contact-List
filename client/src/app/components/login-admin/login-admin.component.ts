import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  model: any = {};
  loginAdmin: FormGroup
  message: string
  constructor(private builder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

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
    this.model.username = this.loginAdmin.get('username').value;
    this.model.password = this.loginAdmin.get('password').value;
    this.authService.login(this.model).subscribe(data => {
      if(data.username){
        localStorage.setItem('admin',data.username);
        this.router.navigate(['/adminOptions'])
      }
    },err => {
      this.message = "Login Failed"
    })
  }

}
