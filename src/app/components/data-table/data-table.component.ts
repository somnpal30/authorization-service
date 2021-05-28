import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthorizationProfile} from '../../shared/model/authorizationProfileList';
import {Store} from '@ngrx/store';
import {SharedDataService} from '../../shared/service/shared-data.service';
import {Subscription} from 'rxjs';
import {getAuthorizationProfile} from "../../store/selectors/authorization.selector";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnDestroy {

  authorizationProfiles: AuthorizationProfile[] = [];
  subscription: Subscription | undefined;

  constructor(private store: Store<any>, private data: SharedDataService) {
  }

  ngOnInit(): void {

    /* this.store.select(getAuthorizationProfile).subscribe(resp => {
       this.authorizationProfiles = resp;
     })*/

    this.data.getSelectedFilterVal().subscribe(resp => {

      this.store.select(getAuthorizationProfile).subscribe(resp1 => {
        if (resp != null && resp.length > 0) {
          console.log(resp);
          this.authorizationProfiles = resp1.filter(value => {
            return resp.includes(value.categoryName);
          });
        } else {
          this.authorizationProfiles = resp1;
        }


      });
    });


  }

  onRowSelect = (eve: Event) => {
    console.log(eve);
  }

  onRowUnselect = (eve: Event) => {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
