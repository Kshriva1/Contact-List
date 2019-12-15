import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  message: string;
  users: any[] = [];
  data: any = {};
  createContact: FormGroup
  constructor(private builder: FormBuilder,
              private router: Router,
              private adminService: AdminService,
              private userService: UserService) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){
    this.createContact = this.builder.group({
      name:['',Validators.required],
      phone:['',Validators.required]
    })
  }

  handleSubmit(){
    this.data.name = this.createContact.get('name').value
    this.data.phone =  this.createContact.get('phone').value.toString();
    this.data.user = localStorage.getItem('user');
    console.log(this.data);
    this.adminService.view().subscribe(data => {
      this.users = data;
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].name === this.data.user){
          for(let j=0;j<this.users[i].roles.length;j++){
            if(this.users[i].roles[j].toLowerCase() === 'create'){
              this.userService.create(this.data).subscribe(res => {
                if(res.name){
                  this.message = "Contact created successfully"
                  return;
                } 
              },err =>{
                this.message = "Failed to create contact"
                return;
              })
            }
          }
          this.message = "You do not have permission to create contacts"
        }
      }
    })
  }

}
