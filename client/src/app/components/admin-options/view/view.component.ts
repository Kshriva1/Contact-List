import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  data: any[] = [];
  constructor(private router: Router,
              private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.view().subscribe(data => {
      this.data = data;
    })

  }

}
