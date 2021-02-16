import {Component, OnInit} from '@angular/core';
import {RemoteDataService} from "../../service/remote-data.service";
import {AuthorizationProfile} from "../../model/authorizationProfileList";

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
    })
  }

  onRowSelect(eve : Event){
    console.log(eve)
  }
  onRowUnselect(eve : Event){

  }

}
