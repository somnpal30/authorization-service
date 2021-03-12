import {Component, OnInit} from '@angular/core';
import {WorkspaceDetails} from '../../shared/model/workspace';
import {RemoteDataService} from '../../shared/service/remote-data.service';
import {Store} from '@ngrx/store';
import {AuthorizationState} from '../../store/reducers/authorization-reducer.reducer';
import {getWorkspace} from '../../store/selectors/authorization.selector';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  workspaceCategoryDetails: WorkspaceDetails[] | undefined;
  selectedValues: string[] = [];
  appliedFilterValues: string[] = [];
  badgeCounter: number = 0;

  constructor(private remoteService: RemoteDataService, private store: Store<AuthorizationState>) {
  }

  ngOnInit(): void {
    this.store.select(getWorkspace).subscribe(resp => this.workspaceCategoryDetails = resp?.workspaceCategoryDetails);
  }

  traceClick() {
    //console.log(val);
    console.log(this.selectedValues);
  }

  clearFilter() {
    this.selectedValues = [];
    this.appliedFilterValues = [];
    this.badgeCounter = 0;
  }

  applyFilter() {
    this.badgeCounter = this.selectedValues.length;
    this.appliedFilterValues = [...this.selectedValues];
  }


}
