import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
    localStorage.setItem('time', 'current time  : ' + new Date());
  }

  title = 'authorization-profile';

  showAuthList = () => {
    this.router.navigate(['../authorization-list']);
  }

  showAuth = () => {
    this.router.navigate(['../authorization-profile']);
  }

  ngOnInit(): void {

    if (window.performance) {

      var perfEntries = performance.getEntriesByType('navigation');
      console.log('window.performance works fine on this browser ' + perfEntries[0].toJSON());

      for (let i = 0; i < perfEntries.length; i++) {
        let p: PerformanceNavigationTiming = perfEntries[i] as PerformanceNavigationTiming;
        console.log('log 1 ' + p.type);
      }


    }
    /*console.log(performance.navigation.type);
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      console.log('This page is reloaded');
    } else {
      console.log('This page is not reloaded');
    }*/
  }

  // @HostListener('window:beforeunload', ['$event'])
  unloadHandler = (event: Event) => {

    this.processData();
    event.returnValue = true;
  }
  processData = () => {
    // window.confirm('hi');
    // store data into local storage before browser refresh
    localStorage.setItem('data', '' + new Date());
  }
}

