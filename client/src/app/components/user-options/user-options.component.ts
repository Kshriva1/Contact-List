import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../services/auth-user.service'

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(private authUserService: AuthUserService) { }

  ngOnInit() {
  }

}
