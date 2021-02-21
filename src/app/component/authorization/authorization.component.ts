import {Component, OnInit} from '@angular/core';
import {RemoteDataService} from "../../service/remote-data.service";
import {Module, ModuleAndServices, Privilege} from "../../model/moduleAndServices";
import {Attribute} from "../../model/serviceDetails";
import {WorkspaceDetails} from "../../model/workspace";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public moduleAndServiceCol: ModuleAndServices | any;
  public modules: Module[] = [];
  public privileges: Privilege[];
  public channels: Attribute[];
  public levels: Attribute[];
  public workspaceDetails: WorkspaceDetails[] = [];
  selectedModule: Module | any;
  selectedPrivilege: Privilege | any;

  constructor(private remoteService: RemoteDataService) {
    this.privileges = [];
    this.channels = [];
    this.levels = [];

  }

  ngOnInit(): void {
    this.remoteService.loadModuleAndServiceDetails().subscribe(resp => {
      this.moduleAndServiceCol = resp;
      this.modules = this.moduleAndServiceCol.modules;
    }, error => {
    })
  }

  displayService(event: Event) {
    this.selectedModule = event;
    this.privileges = this.selectedModule.privileges;
    this.resetServiceDetails();
  }

  resetServiceDetails() {
    this.workspaceDetails = [];
    this.levels = [];
    this.channels =[];
  }

  displayServiceDetails(event: Event) {
    this.selectedPrivilege = event;
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
      if ("USER_TYPES" === value) {
        this.remoteService.loadWorkspace().subscribe(
          resp => {
            //console.log(resp)
            this.workspaceDetails
              = resp?.workspaceCategoryDetails.sort((o1, o2) => (o1.workspaceName > o2.workspaceName ? 1 : -1));

          },
          error => {
            console.error(error)
          }
        );
      } else {
        this.workspaceDetails = [];
      }

      if ("LEVELS" === value) {
        this.remoteService.loadLevel().subscribe(resp => {
          this.levels = resp.levels;
          console.log(resp);
        })
      } else {
        this.levels = [];
      }
    })
  }
}


