import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deleteUser: FormGroup
  message: string;
  users: any[] = [];
  constructor(private builder: FormBuilder,
              private router: Router,
              private adminService: AdminService) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){
    this.deleteUser = this.builder.group({
      email:['',Validators.required]
    })
  }

  handleSubmit(){
    this.adminService.view().subscribe(data => {
      this.users = data;
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].email === this.deleteUser.get('email').value){
          this.adminService.delete(this.users[i]._id).subscribe(res => {
            if(res.name){
              this.message = "User deleted successfully"
              return;
            }
          })
        }
      }
      this.message = "User Not Deleted"
    })
  }
}
