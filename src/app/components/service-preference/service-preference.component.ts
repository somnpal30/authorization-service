import {Component, Input, OnInit} from '@angular/core';
import {ATTRIBUTE_TYPE} from '../../shared/utils/application.util';
import {Store} from '@ngrx/store';
import {setAttribute} from '../../store/actions/authorization.action';

@Component({
  selector: 'app-service-preference',
  templateUrl: './service-preference.component.html',
  styles: []
})
export class ServicePreferenceComponent implements OnInit {
  @Input() header: string = '';
  @Input() attributes: any;
  @Input() type: string = '';

  selectedValues: string[] = [];
  attributeType = ATTRIBUTE_TYPE;

  constructor(private store: Store) {
    this.attributes = [];
  }

  ngOnInit(): void {

  }

  setAttribute = () => {
    this.store.dispatch(setAttribute({attributeType: this.type, attributes: this.selectedValues}));
  };
}
