import {Component, OnInit} from '@angular/core';
import {Category, WorkspaceDetails} from '../../shared/model/workspace';
import {Store} from '@ngrx/store';

import {getWorkspace} from '../../store/selectors/authorization.selector';
import {AuthorizationState} from '../../store/states/authroization.state';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {
  public selectedNavIndex: number = -1;
  workspaceCategoryDetails: WorkspaceDetails[] | undefined;
  selectedCategoryCol: Category[] = [];
  selectedWorkspaceId: string = '';
  selectedCategory: string = '';

  constructor(private store: Store<AuthorizationState>) {
  }

  initialize() {
    if (this.workspaceCategoryDetails) {
      this.selectedCategoryCol = this.workspaceCategoryDetails[this.selectedNavIndex]?.categories;
    }

  }

  ngOnInit(): void {
    this.store.select(getWorkspace).subscribe(resp => {
      this.workspaceCategoryDetails = resp;
      this.initialize();
    });


    /*
        this.store.select(getWorkspace).subscribe(resp => {
          console.log(resp);

          this.workspaceCategoryDetails
            = resp?.workspaceCategoryDetails.sort((o1, o2) => (o1.workspaceName > o2.workspaceName ? 1 : -1));
          this.initialize();
        });
    */


  }

  displayUserRole(index: number) {
    this.selectedNavIndex = index;
    if (this.workspaceCategoryDetails) {
      this.selectedCategoryCol = this.workspaceCategoryDetails[index].categories;
      this.selectedWorkspaceId = this.workspaceCategoryDetails[index].workspaceId;
    }
  }

}
