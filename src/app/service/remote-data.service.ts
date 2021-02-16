import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Workspace} from "../model/workspace";
import {Observable} from "rxjs";
import {AuthorizationProfileList} from "../model/authorizationProfileList";
import {ModuleAndServices} from "../model/moduleAndServices";
import {ServiceDetails} from "../model/serviceDetails";

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  loadWorkspace(): Observable<Workspace> {
    return this.httpClient.get<Workspace>("/assets/data/workspace.json")
  }

  loadAuthorizationProfileList(): Observable<AuthorizationProfileList> {
    return this.httpClient.get<AuthorizationProfileList>("/assets/data/view-auth-profile-list.json")
  }

  loadModuleAndServiceDetails(): Observable<ModuleAndServices> {
    return this.httpClient.get<ModuleAndServices>("/assets/data/headmerchant.json")
  }

  loadChannel(): Observable<ServiceDetails> {
    return this.httpClient.get<ServiceDetails>("/assets/data/catalogue/channel.json")
  }

  loadLevel(): Observable<ServiceDetails> {
    return this.httpClient.get<ServiceDetails>("/assets/data/catalogue/level.json")
  }


  ngOnInit(): void {
    /*  let channelObservabale = this.httpClient.get<ServiceDetails>("/assets/data/catalogue/channel.json");
      let workspaceObservable = this.httpClient.get<Workspace>("/assets/data/workspace.json");*/
  }

}
