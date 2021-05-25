import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {ComponentCanDeactivate} from './component-can-deactivate';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {

  canDeactivate(component: ComponentCanDeactivate, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
/*debugger
    if (!component.canDeactivate()) {*/
      if (confirm('You have unsaved changes! If you leave, your changes will be lost.')) {
        return true;
      } else {
        return false;
      }
   /* }*/
   // return true;
  }
}
