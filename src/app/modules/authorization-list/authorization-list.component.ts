import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization-list',
  templateUrl: './authorization-list.component.html',
  styleUrls: ['./authorization-list.component.css']
})
export class AuthorizationListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToAddProfile = () => {
    this.router.navigate(['../authorization-profile']);
  };
}
