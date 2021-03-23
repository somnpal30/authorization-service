import {Component, OnInit} from '@angular/core';
import {Module, ModuleAndServices, Privilege} from '../../shared/model/moduleAndServices';

import {WorkspaceDetails} from '../../shared/model/workspace';
import {Attribute} from '../../shared/model/serviceDetails';
import {ATTRIBUTE_TYPE} from '../../shared/utils/application.util';
import {Store} from '@ngrx/store';
import {getModuleServiceSelector} from '../../store/selectors/authorization.selector';
import {RemoteDataService} from '../../shared/service/remote-data.service';

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
  workspaceDetails: WorkspaceDetails[] = [];

  selectedModule: Module | any;
  selectedPrivilege: Privilege | any;

  attributesMap: Map<string, Map<string, string[]>>;
  selectedGateways: string[];
  selectedUsers: string[];
  selectedLevels: string[];

  constructor(private store: Store<any>, private remoteService: RemoteDataService) {
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

    if (!this.attributesMap.has(this.selectedPrivilege.code)) {
      this.attributesMap.set(this.selectedPrivilege.code, new Map<string, string[]>());

    } else {
      let map = this.attributesMap.get(this.selectedPrivilege.code);
      map?.forEach(((value, key) => {
            switch (key) {
              case  this.attributeType.USER_TYPES :
                this.selectedUsers = value;
                break;
              case this.attributeType.LEVEL :
                this.selectedLevels = value;
                break;
              case this.attributeType.GATEWAY :
                this.selectedGateways = value;
                break;
              default :
                console.log('NO records available for key : ', key);
            }
          }
        )
      );
    }


    if (this.selectedPrivilege) {
      if (this.channels.length === 0) {
        this.remoteService.loadServices(this.attributeType.GATEWAY).subscribe(resp => {
          this.channels = resp.channels;
        });
      }
    } else {
      this.channels = [];
    }


    this.selectedPrivilege.attributes?.forEach((value: any) => {
      if (this.attributeType.USER_TYPES === value) {
        this.remoteService.loadWorkspaces().subscribe(
          resp => {
            this.workspaceDetails = resp;
          },
          error => {
            console.error(error);
          }
        );
      } else {
        this.workspaceDetails = [];
      }

      if (this.attributeType.LEVEL === value) {
        this.remoteService.loadServices(this.attributeType.LEVEL).subscribe(resp => {
          this.levels = resp.levels;
        });
      } else {
        this.levels = [];
      }
    });
  }


  setAttribute(type: string) {
    console.log(type);


    if (!(this.attributesMap.has(this.selectedPrivilege.code)
      && this.attributesMap.get(this.selectedPrivilege.code)?.has(type))) {
      this.attributesMap.set(this.selectedPrivilege.code, new Map<string, string[]>().set(type, []));
    }
    let map = this.attributesMap.get(this.selectedPrivilege.code);
    switch (type) {
      case  this.attributeType.USER_TYPES :
        map?.set(type, [...this.selectedUsers]);
        break;
      case this.attributeType.LEVEL :
        map?.set(type, [...this.selectedLevels]);
        break;
      case this.attributeType.GATEWAY :
        map?.set(type, [...this.selectedGateways]);
        break;
      default :
        console.log('NO type found : ', type);
    }


  }
}



