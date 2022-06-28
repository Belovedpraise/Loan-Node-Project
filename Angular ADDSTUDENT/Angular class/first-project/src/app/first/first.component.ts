import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  users:any=[];
  students:any=[
    {id: 0, name:"Taiwo"},
    {id: 1, name:"Kenny"},
    {id: 2, name:"Idowu"},
  ]

  constructor(private routerMi:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().
    subscribe((data)=>
    this.users= data;
console.log(data)
    )
  }

}
