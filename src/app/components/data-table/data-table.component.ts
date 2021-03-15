import {Component, OnInit} from '@angular/core';
import {AuthorizationProfile} from '../../shared/model/authorizationProfileList';
import {RemoteDataService} from '../../shared/service/remote-data.service';
import {Store} from '@ngrx/store';
import {getAuthorizationProfile} from '../../store/selectors/authorization.selector';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  authorizationProfiles: AuthorizationProfile[] = [];

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.store.select(getAuthorizationProfile).subscribe(resp => {
      this.authorizationProfiles = resp;
    })
  }

  onRowSelect(eve: Event) {
    console.log(eve);
  }

  onRowUnselect(eve: Event) {

  }

}
