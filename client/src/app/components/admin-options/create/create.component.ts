import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createUser: FormGroup
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }
  buildForm(){
    this.createUser = this.builder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      roles:['',Validators.required]
    })
  }

  handleSubmit(){
    
  }

}
