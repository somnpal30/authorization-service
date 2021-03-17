import {Component, Input, OnInit} from '@angular/core';
import {ATTRIBUTE_TYPE} from '../../shared/utils/application.util';

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
  constructor() {
    this.attributes = [];
  }

  ngOnInit(): void {

  }

  setAttribute = () => {

  };
}
