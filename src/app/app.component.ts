import {Component} from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authorization-profile';

  constructor(private router: Router) {
  }


  showAuthList = () => {
    this.router.navigate(['../authorization-list']);
  };

  showAuth = () => {
    this.router.navigate(['../authorization-profile']);
  };
}

