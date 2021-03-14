import {Component, OnInit} from '@angular/core';
import {AuthorizationProfile} from '../../shared/model/authorizationProfileList';
import {RemoteDataService} from '../../shared/service/remote-data.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  authorizationProfiles: AuthorizationProfile[] = [];

  constructor(private remoteService: RemoteDataService) {
  }

  ngOnInit(): void {
    this.remoteService.loadAuthorizationProfileList().subscribe(resp => {
      this.authorizationProfiles = resp.authorizationProfiles;
      //console.log(this.authorizationProfiles);
    }, error => {
    });
  }

  onRowSelect(eve: Event) {
    console.log(eve);
  }

  onRowUnselect(eve: Event) {

  }

}
