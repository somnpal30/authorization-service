import {Component, OnInit} from '@angular/core';
import {Module, ModuleAndServices, Privilege} from '../../shared/model/moduleAndServices';

import {WorkspaceDetails} from '../../shared/model/workspace';
import {Attribute} from '../../shared/model/serviceDetails';
import {ATTRIBUTE_TYPE} from '../../shared/utils/application.util';
import {Store} from '@ngrx/store';
import {getChannelSelector, getLevelSelector, getModuleServiceSelector, getWorkspace} from '../../store/selectors/authorization.selector';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  attributeType = ATTRIBUTE_TYPE;

  moduleAndServiceCol: ModuleAndServices | any;
  modules: Module[] = [];
  privileges: Privilege[] = [];
  channels: Attribute[] = [];
  levels: Attribute[] = [];
  myLevels: Attribute[] | undefined;

  workspaceDetails: WorkspaceDetails[] = [];

  selectedModule: Module | any;
  selectedPrivilege: Privilege | any;

  attributesMap: Map<string, Map<string, string[]>>;
  selectedGateways: string[];
  selectedUsers: string[];
  selectedLevels: string[];

  constructor(private store: Store<any>) {
    this.store.select(getModuleServiceSelector).subscribe(resp => {
      this.moduleAndServiceCol = resp;
      this.modules = this.moduleAndServiceCol?.modules;
      this.privileges = [];
      this.channels = [];
      this.levels = [];
    });
    //this.gatewayMap = new Map<string, string[]>();
    this.attributesMap = new Map<string, Map<string, string[]>>();
    this.selectedGateways = this.selectedUsers = this.selectedLevels = [];
  }

  ngOnInit(): void {
  }

  displayService(event: Event) {
    this.selectedModule = event;
    this.privileges = this.selectedModule.privileges;
    this.resetServiceDetails();
  }

  resetServiceDetails() {
    this.workspaceDetails = [];
    this.levels = [];
    this.channels = [];
  }

  displayServiceDetails(event: Event) {
    //console.log(event)
    this.selectedPrivilege = event;
    this.selectedGateways = this.selectedLevels = this.selectedUsers = [];


    if (this.selectedPrivilege) {
      // if (this.channels.length === 0) {
      this.store.select(getChannelSelector).subscribe(resp => {
        this.channels = resp;
      });
      // }
    } else {
      this.channels = [];
    }


    this.selectedPrivilege.attributes?.forEach((value: any) => {

      switch (value) {
        case this.attributeType.USER_TYPES :
          this.store.select(getWorkspace).subscribe(resp => {
            this.workspaceDetails = resp;
          });
          break;
        case this.attributeType.LEVEL :
          this.store.select(getLevelSelector).subscribe(resp => {
            this.levels = resp;
            console.log(this.levels);
          });
          break;
        default :
          this.workspaceDetails = this.levels = [];
      }

    });
  }


}



