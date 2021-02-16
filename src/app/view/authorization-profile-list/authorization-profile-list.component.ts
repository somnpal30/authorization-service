import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization-profile-list',
  templateUrl: './authorization-profile-list.component.html',
  styleUrls: ['./authorization-profile-list.component.css']
})
export class AuthorizationProfileListComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAddProfile(){
    this.router.navigate(['../authorization-profile']);
  }
}
