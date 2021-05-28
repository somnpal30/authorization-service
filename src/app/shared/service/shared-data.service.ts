import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private selectedFilterValues: BehaviorSubject<any> = new BehaviorSubject(null);

  getSelectedFilterVal = (): Observable<string[]> => {
    return this.selectedFilterValues.asObservable();
  }

  setSelectedFilterVal = (val: string[]) => {
    this.selectedFilterValues.next(val);
  }

}
