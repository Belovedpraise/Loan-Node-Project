import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit
{
  registrationForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }
  getDetails(){
    console.log(this.registrationForm.value);
  }

}


