import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Workspace, WorkspaceDetails} from '../model/workspace';
import {Observable} from 'rxjs';
import {AuthorizationProfile, AuthorizationProfileList} from '../model/authorizationProfileList';
import {ModuleAndServices} from '../model/moduleAndServices';
import {ServiceDetails} from '../model/serviceDetails';
import {map} from 'rxjs/operators';
import {ATTRIBUTE_TYPE} from '../utils/application.util';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService implements OnInit {
  attributeType = ATTRIBUTE_TYPE;
  constructor(private httpClient: HttpClient) {
  }

 /* loadWorkspace(): Observable<Workspace> {
    return this.httpClient.get<Workspace>('./assets/data/workspace.json');
  }*/

  loadWorkspaces(): Observable<WorkspaceDetails[]> {
    return this.httpClient.get<Workspace>('./assets/data/workspace.json').pipe(
      map(resp => resp.workspaceCategoryDetails.sort((o1, o2) => (o1.workspaceName > o2.workspaceName ? 1 : -1))
      ));
  }

  /*loadAuthorizationProfileList(): Observable<AuthorizationProfileList> {
    return this.httpClient.get<AuthorizationProfileList>('./assets/data/view-auth-profile-list.json');
  }*/

  loadAuthorizationProfiles(): Observable<AuthorizationProfile[]> {
    return this.httpClient.get<AuthorizationProfileList>('./assets/data/view-auth-profile-list.json')
      .pipe(map(resp => resp.authorizationProfiles));
  }

  loadModuleAndServiceDetails(): Observable<ModuleAndServices> {
    return this.httpClient.get<ModuleAndServices>('./assets/data/headmerchant.json');
  }

/* loadChannel(): Observable<ServiceDetails> {
    return this.httpClient.get<ServiceDetails>('./assets/data/catalogue/channel.json');
  }

  loadLevel(): Observable<ServiceDetails> {
    return this.httpClient.get<ServiceDetails>('./assets/data/catalogue/level.json');
  }*/

  loadServices(type: string, args: string = ''): Observable<ServiceDetails> {
    var url: string = '';
    switch (type) {
      case this.attributeType.USER_TYPES :
        break;
      case this.attributeType.LEVEL :
        url = './assets/data/catalogue/level.json';
        break;
      case this.attributeType.GATEWAY :
        url = './assets/data/catalogue/channel.json';
        break;
      default :
        console.log('NO records available for key : ', type);

    }
    return this.httpClient.get<ServiceDetails>(url);
  }


  ngOnInit(): void {
    /*  let channelObservabale = this.httpClient.get<ServiceDetails>("/assets/data/catalogue/channel.json");
      let workspaceObservable = this.httpClient.get<Workspace>("/assets/data/workspace.json");*/
  }

}
