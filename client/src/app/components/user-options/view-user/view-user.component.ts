import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  message: string;
  users: any[] = [];
  data: any = {};

  constructor(private router: Router,
    private adminService: AdminService,
    private userService: UserService) { }

  ngOnInit() {
    this.data.user = localStorage.getItem('user');
    this.adminService.view().subscribe(data => {
      this.users = data;
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].name === this.data.user){
          for(let j=0;j<this.users[i].roles.length;j++){
            if(this.users[i].roles[j].toLowerCase() === 'view'){
              this.userService.view(this.data).subscribe(res => {
                this.users = res;
                return;
              },err =>{
                this.message = "Failed to show contact"
                return;
              })
            }
          }
          this.message = "You do not have permission to view contact information"
        }
      }
    })
  }

}
