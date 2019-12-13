import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateContact: FormGroup
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){
    this.updateContact = this.builder.group({
      oldname:['',Validators.required],
      name:['',Validators.required],
      phone:['',Validators.required]
    })
  }

  handleSubmit(){
    
  }

}
