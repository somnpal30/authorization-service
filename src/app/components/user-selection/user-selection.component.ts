import { Component, OnInit } from '@angular/core';
import {Category, WorkspaceDetails} from '../../shared/model/workspace';
import {RemoteDataService} from '../../shared/service/remote-data.service';


@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  public selectedNavIndex:number = -1;
  workspaceCategoryDetails: WorkspaceDetails[] = [];
  selectedCategoryCol:Category[] = [];
  selectedWorkspaceId:string = "";
  selectedCategory:string="";
  constructor(private remoteService: RemoteDataService) { }

  initialize(){
    this.selectedCategoryCol = this.workspaceCategoryDetails[this.selectedNavIndex]?.categories;
  }

  ngOnInit(): void {

    this.remoteService.loadWorkspace().subscribe(
      resp => {
        //console.log(resp)
        this.workspaceCategoryDetails
          = resp?.workspaceCategoryDetails.sort( (o1,o2) => (o1.workspaceName > o2.workspaceName ? 1: -1) );
        this.initialize();
      },
      error => {
        console.error(error)
      }
    );
  }

  displayUserRole(index:number) {
    this.selectedNavIndex = index;
    this.selectedCategoryCol = this.workspaceCategoryDetails[index].categories;
    this.selectedWorkspaceId = this.workspaceCategoryDetails[index].workspaceId;
  }

}
