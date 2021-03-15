import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {Observable} from 'rxjs';


@Component({
  selector: 'app-authorization-list',
  templateUrl: './authorization-list.component.html',
  styleUrls: ['./authorization-list.component.css']
})
export class AuthorizationListComponent implements OnInit {
  greetingMessage$: Observable<string> | undefined;

  constructor(private router: Router, private store: Store) {
  }

  ngOnInit(): void {

  }

  navigateToAddProfile = () => {
    this.router.navigate(['../authorization-profile']);
  };


}
