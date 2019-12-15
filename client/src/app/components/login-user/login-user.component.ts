import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  message:string
  data: any = {}
  loginUser: FormGroup
  constructor(private builder: FormBuilder,
              private router: Router,
              private authUserService: AuthUserService) { }

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
    this.data.email = this.loginUser.get('email').value;
    this.data.password = this.loginUser.get('password').value;

    this.authUserService.login(this.data).subscribe(data => {
      console.log(data);
      if(data.name){
        localStorage.setItem('user',data.name)
        this.router.navigate(['/userOptions'])
      }
    },err =>{
      this.message = "Login Failed"
    })

  }

}
