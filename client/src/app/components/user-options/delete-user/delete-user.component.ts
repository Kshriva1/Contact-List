import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service'
import { AdminService } from '../../../services/admin.service'

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  message: String
  users: any[] = []
  contactsOfUser: any[] = []
  localUser: any = {}
  deleteContact: FormGroup
  constructor(private builder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private adminService: AdminService) { }

  ngOnInit() {
    this.buildForm()
  }
  buildForm(){
    this.deleteContact = this.builder.group({
      phone:['',Validators.required]
    })
  }

  handleSubmit(){
    this.localUser.user = localStorage.getItem('user');
    this.adminService.view().subscribe(data => {
      this.users = data;
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].name === this.localUser.user){
          for(let j=0;j<this.users[i].roles.length;j++){
            if(this.users[i].roles[j].toLowerCase() === 'delete'){
              this.userService.view(this.localUser).subscribe(resp => {
                this.contactsOfUser = resp;
                for(let k=0;k<this.contactsOfUser.length;k++){
                  if(this.contactsOfUser[k].phone === this.deleteContact.get('phone').value){
                    this.userService.delete(this.contactsOfUser[k]._id).subscribe(res => {
                      if(res.name){
                        this.message = "Contact deleted successfully"
                        return;
                      } 
                    },err =>{
                      this.message = "Failed to delete contact"
                      return;
                    })
                  }
                }
              })
            }
          }
          this.message = "You do not have permission to delete contacts"
        }
      }
    })

  }

}
