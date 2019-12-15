import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service'
import { AdminService } from '../../../services/admin.service'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateContact: FormGroup
  message: string
  data: any = {}
  users: any[] = []
  localUser: any = {}
  contactsOfUser: any[] = [];
  constructor(private builder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){
    this.updateContact = this.builder.group({
      oldphone:['',Validators.required],
      name:['',Validators.required],
      phone:['',Validators.required]
    })
  }

  handleSubmit(){
    this.data.name = this.updateContact.get('name').value;
    this.data.phone = this.updateContact.get('phone').value;
    this.localUser.user = localStorage.getItem('user');
    console.log(this.data);
    this.adminService.view().subscribe(data => {
      this.users = data;
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].name === this.localUser.user){
          for(let j=0;j<this.users[i].roles.length;j++){
            if(this.users[i].roles[j].toLowerCase() === 'update'){
              this.userService.view(this.localUser).subscribe(resp => {
                this.contactsOfUser = resp;
                for(let k=0;k<this.contactsOfUser.length;k++){
                  if(this.contactsOfUser[k].phone === this.updateContact.get('oldphone').value){
                    this.userService.update(this.contactsOfUser[k]._id, this.data).subscribe(res => {
                      if(res.name){
                        this.message = "Contact updated successfully"
                        return;
                      } 
                    },err =>{
                      this.message = "Failed to update contact"
                      return;
                    })
                  }
                }
              })
            }
          }
          this.message = "You do not have permission to update contacts"
        }
      }
    })
  }

}
