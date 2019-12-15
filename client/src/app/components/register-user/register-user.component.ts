import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from '../../services/auth-user.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  message: string;
  users: any[] = [];
  data: any = {};
  registerUser: FormGroup;
  constructor(private builder: FormBuilder,
              private router: Router,
              private authUserService: AuthUserService,
              private adminService: AdminService) { }

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
    if(this.registerUser.get('password').value !== this.registerUser.get('confirmPassword').value){
      this.message = "Password and Confirm Password do not match"
      return;
    }
    this.data.name = this.registerUser.get('name').value
    this.data.email = this.registerUser.get('email').value
    this.data.password = this.registerUser.get('password').value
    this.adminService.view().subscribe(data => {
      this.users = data;
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].name === this.data.name){
          if(this.users[i].email === this.data.email){
            this.authUserService.register(this.data).subscribe(res => {
              console.log(res);
              if(res.name){
                localStorage.setItem('user',this.data.name)
                this.router.navigate(['/userOptions'])
              } 
              
            },err => {
              this.message = "Registration unsuccessful"
              return;
            })
          }
        }
      }
      this.message = "Record not found";
    })

  }

}
