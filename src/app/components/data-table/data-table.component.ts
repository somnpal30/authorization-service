import {Component, OnInit} from '@angular/core';
import {AuthorizationProfile} from '../../shared/model/authorizationProfileList';
import {Store} from '@ngrx/store';
import {AuthorizationListState} from '../../store/appStore';
import {getAuthorizationList} from '../../store/selectors/authorization.selector';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  authorizationProfiles: AuthorizationProfile[] = [];

  constructor(private store: Store<AuthorizationListState>) {

  }

  ngOnInit(): void {

    //this.store.dispatch(initializeLoadAuthzList());
    this.store.select(getAuthorizationList).subscribe(resp => {
     // console.log("data table ",resp)
      this.authorizationProfiles = resp;
    });

  }

  onRowSelect(eve: Event) {
    console.log(eve);
  }

  onRowUnselect(eve: Event) {

  }


}
