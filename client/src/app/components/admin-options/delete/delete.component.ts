import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deleteContact: FormGroup
  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){
    this.deleteContact = this.builder.group({
      email:['',Validators.required]
    })
  }

  handleSubmit(){

  }
}
