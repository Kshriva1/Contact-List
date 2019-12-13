import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
createContact: FormGroup
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){
    this.createContact = this.builder.group({
      name:['',Validators.required],
      phone:['',Validators.required]
    })
  }

}
