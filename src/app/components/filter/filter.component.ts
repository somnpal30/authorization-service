import {Component, OnInit} from '@angular/core';
import {WorkspaceDetails} from '../../shared/model/workspace';
import {Store} from '@ngrx/store';

import {getWorkspace} from '../../store/selectors/authorization.selector';
import {SharedDataService} from '../../shared/service/shared-data.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  workspaceCategoryDetails: WorkspaceDetails[] | undefined;
  selectedValues: string[] = [];
  appliedFilterValues: string[] = [];
  badgeCounter = 0;


  constructor(private store: Store<any>, private dateService: SharedDataService) {
  }

  ngOnInit(): void {
    this.store.select(getWorkspace).subscribe(resp => {
      this.workspaceCategoryDetails = resp;
    });
  }

  traceClick = () => {
    // console.log(val);
    // console.log(this.selectedValues);
  }

  clearFilter = () => {
    this.selectedValues = [];
    this.appliedFilterValues = [];
    this.badgeCounter = 0;
  }

  applyFilter = () => {
    this.badgeCounter = this.selectedValues.length;
    this.appliedFilterValues = [...this.selectedValues];
    this.dateService.setSelectedFilterVal([...this.selectedValues]);
  }

  fetchRecords = () => {
    // this.store.dispatch(initializeLoadAuthzListAction());
  }

}
