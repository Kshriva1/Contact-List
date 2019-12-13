import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateUser: FormGroup
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){
    this.updateUser = this.builder.group({
      oldname:['',Validators.required],
      name:['',Validators.required],
      email:['',Validators.required],
      roles:['',Validators.required]
    })
  }

}
