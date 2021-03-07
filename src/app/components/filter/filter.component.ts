import { Component, OnInit } from '@angular/core';
import {WorkspaceDetails} from '../../shared/model/workspace';
import {RemoteDataService} from '../../shared/service/remote-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  workspaceCategoryDetails: WorkspaceDetails[] = [];
  selectedValues: string[]= [] ;
  appliedFilterValues :  string[]= [] ;
  badgeCounter:number = 0
  constructor(private remoteService: RemoteDataService) {
  }

  ngOnInit(): void {

    this.remoteService.loadWorkspace().subscribe(
      resp => {
        //console.log(resp)
        this.workspaceCategoryDetails = resp?.workspaceCategoryDetails.sort( (o1,o2) => (o1.workspaceName > o2.workspaceName ? 1: -1) );
      },
      error => {
        console.error(error)
      }
    );
  }

  traceClick(){
    //console.log(val);
    console.log(this.selectedValues)
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
  showSelectedValue() {
    this.selectedValues = [...this.appliedFilterValues];
  }
}
