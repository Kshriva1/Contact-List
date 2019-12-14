import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateUser: FormGroup
  message: string;
  users: any[] = [];
  data: any = {};
  constructor(private builder: FormBuilder,
              private adminService: AdminService) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){
    this.updateUser = this.builder.group({
      oldname:['',Validators.required],
      name:['',Validators.required],
      email:['',Validators.required],
      roles:['',Validators.required]
    })
  }

  handleSubmit(){
    this.data.name = this.updateUser.get('name').value;
    this.data.email = this.updateUser.get('email').value;
    this.data.roles = this.updateUser.get('roles').value.split(',')
    this.adminService.view().subscribe(data => {
      this.users = data;
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].name === this.updateUser.get('oldname').value){
            this.adminService.update(this.users[i]._id,this.data).subscribe(data =>{
              if(data.name){
                this.message = "Update Successfull"
                return;
              }
              
            })
          }
      }
      this.message = "Update Unsuccessfull"
    })
  }

}
