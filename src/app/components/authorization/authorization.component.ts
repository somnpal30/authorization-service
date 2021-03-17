import {Component, OnInit} from '@angular/core';
import {Module, ModuleAndServices, Privilege} from '../../shared/model/moduleAndServices';

import {WorkspaceDetails} from '../../shared/model/workspace';
import {RemoteDataService} from '../../shared/service/remote-data.service';
import {Attribute} from '../../shared/model/serviceDetails';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  AttributeType = {
    user: 'USER', level: 'LEVEL'
  };

  public moduleAndServiceCol: ModuleAndServices | any;
  public modules: Module[] = [];
  public privileges: Privilege[];
  public channels: Attribute[];
  public levels: Attribute[];
  public workspaceDetails: WorkspaceDetails[] = [];
  selectedModule: Module | any;
  selectedPrivilege: Privilege | any;

  gatewayMap: Map<string, string[]>;
  attributesMap: Map<string, Map<string, string[]>>;

  selectedGateways: string[];
  selectedUsers: string[];
  selectedLevels: string[];

  constructor(private remoteService: RemoteDataService) {
    this.privileges = [];
    this.channels = [];
    this.levels = [];

    this.gatewayMap = new Map<string, string[]>();
    this.attributesMap = new Map<string, Map<string, string[]>>();

    this.selectedGateways = this.selectedUsers = this.selectedLevels = [];
  }

  ngOnInit(): void {
    this.remoteService.loadModuleAndServiceDetails().subscribe(resp => {
      this.moduleAndServiceCol = resp;
      this.modules = this.moduleAndServiceCol.modules;
    }, error => {
    });
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

    if (this.gatewayMap.has(this.selectedPrivilege.code)) {
      this.selectedGateways = this.gatewayMap.get(this.selectedPrivilege.code) || [];
    }
    if (!this.attributesMap.has(this.selectedPrivilege.code)) {
      this.attributesMap.set(this.selectedPrivilege.code, new Map<string, string[]>());

    } else {
      let map = this.attributesMap.get(this.selectedPrivilege.code);
      map?.forEach(((value, key) => {
        if (key === this.AttributeType.user) {
          this.selectedUsers = value;
        } else if (key === this.AttributeType.level) {
          this.selectedLevels = value;
        }
      }));
    }


    if (this.selectedPrivilege) {
      if (this.channels.length === 0) {
        this.remoteService.loadChannel().subscribe(resp => {
          this.channels = resp.channels;
        });
      }
    } else {
      this.channels = [];
    }


    this.selectedPrivilege.attributes?.forEach((value: any) => {
      if ('USER_TYPES' === value) {
        this.remoteService.loadWorkspace().subscribe(
          resp => {
            //console.log(resp)
            this.workspaceDetails
              = resp?.workspaceCategoryDetails.sort((o1, o2) => (o1.workspaceName > o2.workspaceName ? 1 : -1));

          },
          error => {
            console.error(error);
          }
        );
      } else {
        this.workspaceDetails = [];
      }

      if ('LEVELS' === value) {
        this.remoteService.loadLevel().subscribe(resp => {
          this.levels = resp.levels;
          //console.log(resp);
        });
      } else {
        this.levels = [];
      }
    });
  }


  setGateways() {
    this.gatewayMap.set(this.selectedPrivilege.code, [...this.selectedGateways]);
  }

  setAttribute(type: string) {
    console.log(type);


    if (!(this.attributesMap.has(this.selectedPrivilege.code)
      && this.attributesMap.get(this.selectedPrivilege.code)?.has(type))) {
      this.attributesMap.set(this.selectedPrivilege.code, new Map<string, string[]>().set(type, []));
    }

    let map = this.attributesMap.get(this.selectedPrivilege.code);
    if (type === this.AttributeType.user) {
      map?.set(type, [...this.selectedUsers]);
    } else if (type === this.AttributeType.level) {
      map?.set(type, [...this.selectedLevels]);
    }

    console.log(this.attributesMap);

  }
}



