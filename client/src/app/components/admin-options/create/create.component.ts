import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createUser: FormGroup
  data: any = {};
  message: string;
  roles: any[] = [];
  constructor(private builder: FormBuilder,
              private router: Router,
              private adminService: AdminService) { }

  ngOnInit() {
    this.buildForm()
  }
  buildForm(){
    this.createUser = this.builder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      roles:['',Validators.required]
    })
  }

  handleSubmit(){
    this.roles = this.createUser.get('roles').value.split(',');
    this.data.name = this.createUser.get('name').value;
    this.data.email = this.createUser.get('email').value;
    this.data.roles = this.roles;
    this.adminService.create(this.data).subscribe(data => {
      console.log(data);
      if(!data.name){
        this.message = "Failed to create user"
        return;
      }
      this.message = "User Created Successfully"
    })
  }

}
