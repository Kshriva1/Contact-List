import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  deleteContact: FormGroup
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }
  buildForm(){
    this.deleteContact = this.builder.group({
      phone:['',Validators.required]
    })
  }

}
